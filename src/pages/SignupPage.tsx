import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button' // Assuming shadcn Button component
import { Link } from 'react-router'
import Logo from '@/components/common/Logo'

// Define Zod Schema
const signupSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters.'),
    email: z.string().email('Please enter a valid email.'),
    username: z.string().min(3, 'Username must be at least 3 characters.'),
    age: z
      .number()
      .min(13, 'You must be at least 13 years old.')
      .max(100, 'Age must be realistic!'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters.')
      .max(20, 'Password must be less than 20 characters.'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match.',
    path: ['confirmPassword'],
  })

// Define form input type based on schema
type SignupFormInputs = z.infer<typeof signupSchema>

const SignupPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = (data: SignupFormInputs) => {
    console.log('Form submitted:', data)
    alert('Signup successful!')
  }

  return (
    <div className="bg-background flex grow items-center justify-center">
      <div className="bg-card w-[95%] max-w-lg rounded-lg p-8 shadow-md">
        <h2 className="text-foreground mb-6 text-center text-3xl font-bold">
          Create Your{' '}
          <span className="text-primary">
            <Logo />
          </span>{' '}
          Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-foreground mb-2 block">Name</label>
            <input
              {...register('name')}
              className={`bg-background w-full rounded-lg border px-4 py-2 ${
                errors.name ? 'border-destructive' : 'border-border'
              }`}
              type="text"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-destructive text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-foreground mb-2 block">Email</label>
            <input
              {...register('email')}
              className={`bg-background w-full rounded-lg border px-4 py-2 ${
                errors.email ? 'border-destructive' : 'border-border'
              }`}
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-destructive text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Username */}
          <div>
            <label className="text-foreground mb-2 block">Username</label>
            <input
              {...register('username')}
              className={`bg-background w-full rounded-lg border px-4 py-2 ${
                errors.username ? 'border-destructive' : 'border-border'
              }`}
              type="text"
              placeholder="Choose a username"
            />
            {errors.username && (
              <p className="text-destructive text-sm">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Age */}
          <div>
            <label className="text-foreground mb-2 block">Age</label>
            <input
              {...register('age', { valueAsNumber: true })}
              className={`bg-background w-full rounded-lg border px-4 py-2 ${
                errors.age ? 'border-destructive' : 'border-border'
              }`}
              type="number"
              placeholder="Enter your age"
            />
            {errors.age && (
              <p className="text-destructive text-sm">{errors.age.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-foreground mb-2 block">Password</label>
            <input
              {...register('password')}
              className={`bg-background w-full rounded-lg border px-4 py-2 ${
                errors.password ? 'border-destructive' : 'border-border'
              }`}
              type="password"
              placeholder="Create a password"
            />
            {errors.password && (
              <p className="text-destructive text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-foreground mb-2 block">
              Confirm Password
            </label>
            <input
              {...register('confirmPassword')}
              className={`bg-background w-full rounded-lg border px-4 py-2 ${
                errors.confirmPassword ? 'border-destructive' : 'border-border'
              }`}
              type="password"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-destructive text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90 w-full py-3"
          >
            Sign Up 🚀
          </Button>
        </form>
        {/* Footer Text */}
        <p className="text-muted-foreground mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignupPage
