// const LoginPage = () => {
//   return (
//     <div>LoginPage</div>
//   )
// }

// export default LoginPage

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button' // Assuming shadcn component
import { Link } from 'react-router'

// Define Zod schema for validation
const loginSchema = z.object({
  identifier: z
    .string()
    .nonempty({ message: 'This field is required.' })
    .refine((val) => val.includes('@') || /^[a-zA-Z0-9_.-]+$/.test(val), {
      message: 'Must be a valid username or email.',
    }),
  password: z.string().min(6, 'Password must be at least 6 characters long.'),
})

type LoginFormInputs = z.infer<typeof loginSchema>

const LoginPage: React.FC = () => {
  const [useUsername, setUseUsername] = useState(true) // Toggle between Username and Email

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormInputs) => {
    console.log('Login Data Submitted:', data)
    alert('Login Successful!')
  }

  return (
    <div className="flex grow items-center justify-center bg-white dark:bg-gray-900">
      <div className="w-full max-w-md rounded-lg bg-gray-100 p-8 shadow-md dark:bg-gray-800">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Login to Your Account
        </h2>

        {/* Toggle Button to switch between "Login with Email" and "Login with Username" */}
        <div className="mb-6 text-center">
          <Button
            className={`rounded-full px-4 py-2 ${
              useUsername ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
            }`}
            onClick={() => setUseUsername(!useUsername)}
          >
            {useUsername
              ? 'Login with Email'
              : 'Login with Username'}
          </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Username or Email Field (Dynamic Placeholder) */}
          <div>
            <label className="mb-2 block text-gray-700 dark:text-gray-300">
              {useUsername ? 'Username' : 'Email'}
            </label>
            <input
              {...register('identifier')}
              className={`w-full rounded-lg border bg-white px-4 py-2 dark:bg-gray-700 ${
                errors.identifier
                  ? 'border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
              type={useUsername ? 'text' : 'email'}
              placeholder={
                useUsername ? 'Enter your username' : 'Enter your email'
              }
            />
            {errors.identifier && (
              <p className="text-sm text-red-500">
                {errors.identifier.message}
              </p>
            )}
          </div>

          {/* Password Field */}
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
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 py-3 text-white hover:bg-blue-700"
          >
            Log In 🚀
          </Button>
        </form>

        {/* Footer Text */}
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
