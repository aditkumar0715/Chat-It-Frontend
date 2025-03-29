// const SignupPage = () => {
//   return <div>SignupPage</div>
// }

// export default SignupPage

import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button' // Assuming shadcn Button component
import { Link } from 'react-router'

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
    <div className="flex grow items-center justify-center bg-white dark:bg-gray-900">
      <div className="w-[95%] max-w-lg rounded-lg bg-gray-100 p-8 shadow-md dark:bg-gray-800">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="mb-2 block text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              {...register('name')}
              className={`w-full rounded-lg border bg-white px-4 py-2 dark:bg-gray-700 ${
                errors.name
                  ? 'border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
              type="text"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              {...register('email')}
              className={`w-full rounded-lg border bg-white px-4 py-2 dark:bg-gray-700 ${
                errors.email
                  ? 'border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Username */}
          <div>
            <label className="mb-2 block text-gray-700 dark:text-gray-300">
              Username
            </label>
            <input
              {...register('username')}
              className={`w-full rounded-lg border bg-white px-4 py-2 dark:bg-gray-700 ${
                errors.username
                  ? 'border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
              type="text"
              placeholder="Choose a username"
            />
            {errors.username && (
              <p className="text-sm text-red-500">{errors.username.message}</p>
            )}
          </div>

          {/* Age */}
          <div>
            <label className="mb-2 block text-gray-700 dark:text-gray-300">
              Age
            </label>
            <input
              {...register('age', { valueAsNumber: true })}
              className={`w-full rounded-lg border bg-white px-4 py-2 dark:bg-gray-700 ${
                errors.age
                  ? 'border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
              type="number"
              placeholder="Enter your age"
            />
            {errors.age && (
              <p className="text-sm text-red-500">{errors.age.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              {...register('password')}
              className={`w-full rounded-lg border bg-white px-4 py-2 dark:bg-gray-700 ${
                errors.password
                  ? 'border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
              type="password"
              placeholder="Create a password"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block text-gray-700 dark:text-gray-300">
              Confirm Password
            </label>
            <input
              {...register('confirmPassword')}
              className={`w-full rounded-lg border bg-white px-4 py-2 dark:bg-gray-700 ${
                errors.confirmPassword
                  ? 'border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
              type="password"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 py-3 text-white hover:bg-blue-700"
          >
            Sign Up 🚀
          </Button>
        </form>
        {/* Footer Text */}
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignupPage
