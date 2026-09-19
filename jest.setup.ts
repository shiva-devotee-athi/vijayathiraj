// jest.setup.ts
import "@testing-library/jest-dom";

// Mock matchMedia — jsdom has no real implementation
Object.defineProperty(window, "matchMedia", {
  writable: true,
  configurable: true,
  value: jest.fn(),
});
