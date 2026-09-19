import { chatbotSchema } from "./chatbot_schema";

describe("chatbotSchema", () => {
  it("should pass for a valid message", () => {
    const data = {
      message: "Hello, how are you?",
    };
    const result = chatbotSchema.safeParse(data);
    expect(result.success).toBe(true);
  });

  it("should fail when message is empty", () => {
    const data = {
      message: "",
    };

    const result = chatbotSchema.safeParse(data);

    expect(result.success).toBe(false);

    if (!result.success) {
      expect(result.error.issues[0].message).toBe("Empty Message Can't send");
    }
  });

  it("should fail when message is not a string", () => {
    const data = {
      message: 123,
    };

    const result = chatbotSchema.safeParse(data);

    expect(result.success).toBe(false);
  });
});
