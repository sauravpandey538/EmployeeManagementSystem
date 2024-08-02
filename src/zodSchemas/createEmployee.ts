import { z } from "zod";
export const idValidation = z
  .string()
  .min(1, "Identification must be at least 1 number")
  .max(10, "Identification must be less than 10 number");

export const nameValidation = z
  .string()
  .min(5, "Name must be more than 5 letter")
  .max(25, "Name must be less than 25 letter");

export const createEmployeeSchema = z.object({
  employeeId: idValidation,
  fullName: nameValidation,
  salary: z.number().positive("Salary must be a positive number"),
  facultyType: z.enum(["Marketing Team", "Development Team", "Others"]),
  additionalInfo: z.string().optional(),
});
