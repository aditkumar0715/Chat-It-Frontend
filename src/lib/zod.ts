import { z } from 'zod';

// userSchema
export const userSchema = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string().email(),
  username: z.string(),
  bio: z.string(),
  avatar: z.string().url(),
  friends: z.string().array(),
  blocked: z.string().array(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  age: z.number().optional(),
  gender: z.string().optional(),
});

// signupSchema
export const signupSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters.'),
    email: z.string().email('Please enter a valid email.'),
    username: z.string().min(3, 'Username must be at least 3 characters.'),
    password: z.string().min(6, 'Password must be at least 6 characters.'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match.',
    path: ['confirmPassword'],
  });

// loginSchema
export const loginSchema = z.object({
  email: z.string().nonempty({ message: 'This field is required.' }),
  password: z.string().min(6, 'Password must be at least 6 characters long.'),
});

export const friendSchema = z.object({
  _id: z.string(),
  name: z.string(),
  avatar: z.string().url(),
  username: z.string(),
});

export const AddFriendSchema = z.object({
  username: z.string().min(1, 'Username is required'),
});
