import { z } from "zod";

interface chatbotFormData {
  message: string;
}

const chatbotSchema = z.object({
  message: z.string({ required_error: "Empty Message Can't send" }).min(1, { message: "Empty Message Can't send" }) ,
});

export { chatbotSchema };
export type { chatbotFormData };
