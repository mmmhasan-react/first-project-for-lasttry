import { z } from "zod";

export const userZodSchema = z.object({
  password: z.string({message:"password rquired"}).min(8, { message: "minimum password character" }).optional(),
  needspasswordChange:z.string()
});

