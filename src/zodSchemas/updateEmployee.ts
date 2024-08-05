import { z } from "zod";
const emailValidation = z.string().email({ message: "Invalid email address" });

const phoneNumberValidation = z.string().regex(/^[0-9]{10}$/, {
  message: "Phone number must be 10 digits",
});

const linkedInValidation = z
  .string()
  .regex(/^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/, {
    message: "Invalid LinkedIn URL",
  });

const imageValidation = z
  .instanceof(File)
  .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
    message: "Invalid image file format. Only jpg and png are allowed",
  });

const cvValidation = z
  .instanceof(File)
  .refine((file) => file.type === "application/pdf", {
    message: "Invalid CV file format. Only pdf is allowed",
  });

export const updateEmployeeSchema = z.object({
  email: emailValidation,
  employeeId: z.string(),
  phoneNumber: phoneNumberValidation,
  linkedIn: linkedInValidation,
  image: imageValidation.optional(),
  cv: cvValidation.optional(),
});
