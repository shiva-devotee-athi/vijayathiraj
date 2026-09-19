import { act, renderHook } from "@testing-library/react";
import { useMediaQuery } from "./useMediaQuery";

describe("useDimentions", () => {
  let listeners: ((event: MediaQueryListEvent) => void)[] = [];

  beforeEach(() => {
    listeners = [];
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query: string) => ({
        matches: query === "(min-width: 768px)",
        media: query,
        onchange: null,
        addEventListener: jest.fn(
          (_event: string, callback: (event: MediaQueryListEvent) => void) => {
            listeners.push(callback);
          },
        ),
        removeEventListener: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("should return true when media query matches", () => {
    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"));
    expect(result.current).toBe(true);
  });

  it("should return false when media query matches", () => {
    const { result } = renderHook(() => useMediaQuery("(max-width: 767px)"));
    expect(result.current).toBe(false);
  });

  it("should update when media query changes", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: false,
        media: "(min-width: 768px)",
        onchange: null,
        addEventListener: jest.fn(
          (_event: string, callback: (event: MediaQueryListEvent) => void) => {
            listeners.push(callback);
          },
        ),
        removeEventListener: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"));

    expect(result.current).toBe(false);

    act(() => {
      listeners[0]({
        matches: true,
      } as MediaQueryListEvent);
    });

    expect(result.current).toBe(true);
  });

  it("should register and cleanup event listener", () => {
    const addEventListener = jest.fn();
    const removeEventListener = jest.fn();

    window.matchMedia = jest.fn().mockReturnValue({
      matches: false,
      addEventListener,
      removeEventListener,
    });

    const { unmount } = renderHook(() => useMediaQuery("(min-width: 768px)"));

    expect(addEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function),
    );

    unmount();

    expect(removeEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function),
    );
  });
});
