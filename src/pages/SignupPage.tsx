import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button'; // Assuming shadcn Button component
import { Link, useNavigate } from 'react-router';
import Logo from '@/components/common/Logo';
import { signupSchema } from '@/lib/zod';
import { ISignupInputs } from '@/types/types';
import { toast } from 'react-toastify';
import { signupUser } from '@/lib/axios/services';


const SignupPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupInputs>({
    resolver: zodResolver(signupSchema),
  });
  const navigate = useNavigate(); // Hook to programmatically navigate

  const onSubmit = async (data: ISignupInputs) => {
    // console.log('Form submitted:', data);

    // Call the signup API with the form data
    const response = await signupUser(data);
    // console.log('Signup response:', response);
    if (response.success) {
      toast.success(response.message); // Display success message using toast
      navigate('/login'); // Redirect to the login page after successful signup
    }
    toast.error(response.error); // Display error message using toast
  };

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
  );
};

export default SignupPage;
