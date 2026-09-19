import { act, renderHook } from "@testing-library/react";
import { createRef } from "react";
import { useDimensions } from "./useDimensions";

describe("useMediaQuery", () => {
  const createMockElement = (width: number, height: number) => {
    const element = document.createElement("div");

    Object.defineProperty(element, "offsetWidth", {
      configurable: true,
      value: width,
    });

    Object.defineProperty(element, "offsetHeight", {
      configurable: true,
      value: height,
    });

    return element;
  };

  it("should return initial dimensions as 0", () => {
    const ref = createRef<HTMLDivElement>();
    const { result } = renderHook(() => useDimensions(ref));

    expect(result.current).toEqual({
      width: 0,
      height: 0,
    });
  });

  it("should return element dimensions", () => {
    const element = createMockElement(500, 300);

    const ref = {
      current: element,
    };

    const { result } = renderHook(() => useDimensions(ref));

    expect(result.current).toEqual({
      width: 500,
      height: 300,
    });
  });

  it("should update dimensions when window is resized", () => {
    const element = createMockElement(500, 300);

    const ref = {
      current: element,
    };

    const { result } = renderHook(() => useDimensions(ref));

    expect(result.current).toEqual({
      width: 500,
      height: 300,
    });

    // Change element dimensions
    Object.defineProperty(element, "offsetWidth", {
      configurable: true,
      value: 800,
    });

    Object.defineProperty(element, "offsetHeight", {
      configurable: true,
      value: 600,
    });

    // Trigger resize
    act(() => {
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toEqual({
      width: 800,
      height: 600,
    });
  });

  it("should cleanup resize event listener on unmount", () => {
    const element = createMockElement(500, 300);

    const ref = {
      current: element,
    };

    const addEventListenerSpy = jest.spyOn(window, "addEventListener");

    const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");

    const { unmount } = renderHook(() => useDimensions(ref));

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );

    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });
});
