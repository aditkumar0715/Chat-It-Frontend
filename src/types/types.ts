import { z } from 'zod';
import { userSchema } from '@/lib/zod';
import { signupSchema } from '@/lib/zod';
import { loginSchema } from '@/lib/zod';

export type ITheme = 'dark' | 'light';
export type IUser = z.infer<typeof userSchema>;
export type ISignupInputs = z.infer<typeof signupSchema>
export type ILoginInputs = z.infer<typeof loginSchema>;
