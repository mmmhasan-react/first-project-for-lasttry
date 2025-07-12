
import { z } from "zod"

// 🔹 Nested UserName schema
const userNameZodSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .refine(
      (val) => val.charAt(0) === val.charAt(0).toUpperCase(),
      "First name must start with a capital letter"
    ),
  middleName: z.string().min(1, "Middle name is required"),
  lastName: z.string().min(1, "Last name is required"),
})

// 🔹 Guardian schema
const guardianZodSchema = z.object({
  fatherName: z
    .string()
    .min(1, "Father name is required")
    .max(20, "Father name cannot be more than 20 characters"),
  fatherContactNumber: z
    .string()
    .min(1, "Father contact number is required"),
  fatherOccupation: z.string().min(1, "Father occupation is required"),
  motherName: z.string().min(1, "Mother name is required"),
  motherContactNumber: z
    .string()
    .min(1, "Mother contact number is required"),
  motherOccupation: z.string().min(1, "Mother occupation is required"),
})

// 🔹 Local Guardian schema
const localGuardianZodSchema = z.object({
  name: z.string().min(1, "Local guardian name is required"),
  contactNumber: z
    .string()
    .min(1, "Local guardian contact number is required"),
  occupation: z.string().min(1, "Local guardian occupation is required"),
  address: z.string().min(1, "Local guardian address is required"),
})

// 🔹 Main Student schema
export const studentZodSchema = z.object({
  name: userNameZodSchema,
  id: z.string().min(1, "Student ID is required"),
  password: z.string().min(5, "password is required"),
  gender: z.enum(["male", "female"], {
    errorMap: () => ({ message: "Gender must be either 'male' or 'female'" }),
  }),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  contactNumber: z
    .string()
    .min(1, "Contact number is required"),
  emergencyContactNumber: z
    .string()
    .min(1, "Emergency contact number is required"),
    bloodGroup: z.enum(
    ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    { errorMap: () => ({ message: "Invalid blood group" }) }
  ),
  presentAddress: z.string().min(1, "Present address is required"),
  permanentAddress: z.string().min(1, "Permanent address is required"),
  guardian: guardianZodSchema,
  localGurdian: localGuardianZodSchema,
  profileImage: z
    .string()
    .min(1, "Profile image is required")
    .url("Profile image must be a valid URL"),
  isActive: z.enum(["active", "blocked"]).default("active"),
  isDeleated:z.boolean()
})


