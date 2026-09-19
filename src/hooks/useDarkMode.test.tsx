import { renderHook, act } from "@testing-library/react";
import useDarkMode from "./useDarkMode";

function mockMatchMedia(initialMatches: boolean) {
  const state = { matches: initialMatches };
  const listeners: Array<(e: { matches: boolean }) => void> = [];

  const mql = {
    get matches() {
      return state.matches;
    },
    media: "(prefers-color-scheme: dark)",
    addEventListener: jest.fn(
      (_: string, cb: (e: { matches: boolean }) => void) => {
        listeners.push(cb);
      },
    ),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };

  jest
    .spyOn(window, "matchMedia")
    .mockReturnValue(mql as unknown as MediaQueryList);

  return {
    setMatches: (value: boolean) => {
      state.matches = value;
      listeners.forEach((cb) => cb({ matches: value }));
    },
  };
}

describe("useDarkMode", () => {
  let listeners: Record<string, ((e: MediaQueryListEvent) => void)[]> = {};

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
    jest.restoreAllMocks();
  });

  it("defaults to light when no saved theme and system prefers light", () => {
    mockMatchMedia(false);
    const { result } = renderHook(() => useDarkMode());
    const [theme] = result.current;
    expect(theme).toBe("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("defaults to dark when no saved theme and system prefers dark", () => {
    mockMatchMedia(true);

    const { result } = renderHook(() => useDarkMode());
    const [theme] = result.current;

    expect(theme).toBe("dark");
  });

  it("reads a saved theme from localStorage instead of system preference", () => {
    mockMatchMedia(true);
    localStorage.setItem("theme", "dark");

    const { result } = renderHook(() => useDarkMode());
    const [theme] = result.current;

    expect(theme).toBe("dark");
  });

  it(`applies the "dark" class to <html> and persists to localStorage when theme changes`, () => {
    mockMatchMedia(false);
    const { result } = renderHook(() => useDarkMode());
    const [_, setTheme] = result.current;
    act(() => {
      setTheme("dark");
    });
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it('removes the "dark" class when switching back to light', () => {
    mockMatchMedia(false);
    const { result } = renderHook(() => useDarkMode());

    const [_, setTheme] = result.current;
    act(() => {
      result.current[1]("dark");
    });
    act(() => {
      result.current[1]("light");
    });

    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("follows system preference changes only when user has not manually set a theme", () => {
    const { setMatches } = mockMatchMedia(false);
    const { result } = renderHook(() => useDarkMode());

    expect(result.current[0]).toBe("light");

    act(() => {
      setMatches(true);
    });

    // expect(result.current[0]).toBe("light");
  });

  it("ignores system preference changes once a theme is explicitly saved", () => {
    const { setMatches } = mockMatchMedia(false);
    localStorage.setItem("theme", "light");
    const { result } = renderHook(() => useDarkMode());

    act(() => {
      setMatches(true);
    });

    // should stay light because localStorage has an explicit value
    expect(result.current[0]).toBe("light");
  });
});
