import { z } from "zod";

exports.SignupSchema = z.object({
  name: z.string().min(2, "name must be minimum 2 characters"),
  username: z.string().min(3, "username must be minimum 3 characters"),
  password: z.string(),
  age: z.number()
})

exports.LoginSchema = z.object({
  username: z.string().min(3, "username must be minimum 3 characters"),
  password: z.string(),
})