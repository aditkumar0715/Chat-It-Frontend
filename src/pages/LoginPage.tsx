import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button' // Assuming shadcn component
import { Link } from 'react-router'
import Logo from '@/components/common/Logo'

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
    <div className="bg-background flex grow items-center justify-center">
      <div className="bg-card w-full max-w-md rounded-lg p-8 shadow-md">
        <h2 className="text-foreground mb-6 text-center text-3xl font-bold">
          Login to{' '}
          <span className="text-primary">
            <Logo />
          </span>
        </h2>

        {/* Toggle Button to switch between "Login with Email" and "Login with Username" */}
        <div className="mb-6 text-center">
          <Button
            className={`rounded-full px-4 py-2 bg-primary text-primary-foreground`}
            onClick={() => setUseUsername(!useUsername)}
          >
            {useUsername ? 'Login with Email' : 'Login with Username'}
          </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Username or Email Field (Dynamic Placeholder) */}
          <div>
            <label className="text-foreground mb-2 block">
              {useUsername ? 'Username' : 'Email'}
            </label>
            <input
              {...register('identifier')}
              className={`bg-background w-full rounded-lg border px-4 py-2 ${
                errors.identifier ? 'border-destructive' : 'border-border'
              }`}
              type={useUsername ? 'text' : 'email'}
              placeholder={
                useUsername ? 'Enter your username' : 'Enter your email'
              }
            />
            {errors.identifier && (
              <p className="text-destructive text-sm">
                {errors.identifier.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="text-foreground mb-2 block">Password</label>
            <input
              {...register('password')}
              className={`bg-background w-full rounded-lg border px-4 py-2 ${
                errors.password ? 'border-destructive' : 'border-border'
              }`}
              type="password"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-destructive text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90 w-full py-3"
          >
            Log In 🚀
          </Button>
        </form>

        {/* Footer Text */}
        <p className="text-muted-foreground mt-4 text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
