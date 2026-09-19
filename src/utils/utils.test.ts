import { cn, JOB_SEARCH } from "./utils";

describe("cn", () => {
  it("merges multiple class strings into one", () => {
    expect(cn("px-2", "py-4")).toBe("px-2 py-4");
  });

  it("handles conditional classes (falsy values are dropped)", () => {
    const isActive = false;
    expect(cn("base", isActive && "active")).toBe("base");
  });

  it("includes conditional classes when the condition is true", () => {
    const isActive = true;
    expect(cn("base", isActive && "active")).toBe("base active");
  });

  it("handles objects with boolean values", () => {
    expect(cn({ "font-bold": true, italic: false })).toBe("font-bold");
  });

  it("ignores null, undefined, and empty strings", () => {
    expect(cn("base", null, undefined, "", "extra")).toBe("base extra");
  });
});

describe("JOB_SEARCH", () => {
  it("is a boolean flag set to true", () => {
    expect(JOB_SEARCH).toBe(true);
    expect(typeof JOB_SEARCH).toBe("boolean");
  });
});
