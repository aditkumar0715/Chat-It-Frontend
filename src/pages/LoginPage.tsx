import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button'; // Assuming shadcn component
import { Link } from 'react-router';
import Logo from '@/components/common/Logo';
import { loginUser } from '@/lib/axios/services'; // Importing the login function
import { ILoginInputs } from '@/types/types'; // Importing the ILoginInputs type
import { loginSchema } from '@/lib/zod';
import { useDispatch } from 'react-redux';
import { login } from '@/lib/redux/authSlice'; // Importing the login action
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';



const LoginPage: React.FC = () => {
  const [useUsername, setUseUsername] = useState(false); // Toggle between Username and Email
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: ILoginInputs) => {
    const response = await loginUser(data);
    if (response.success !== true) {
      toast.error(response.message); // Display error message using toast
      return;
    }
    dispatch(login(response)); // Dispatching the login action with user data
    console.log(response);
    toast.success('Login successful!'); // Display success message using toast
    // Redirect to the dashboard or home page after successful login
    navigate("/chat");
  };

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
            className={`bg-primary text-primary-foreground rounded-full px-4 py-2`}
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
              {...register('email')}
              className={`bg-background w-full rounded-lg border px-4 py-2 ${
                errors.email ? 'border-destructive' : 'border-border'
              }`}
              type={useUsername ? 'text' : 'email'}
              placeholder={
                useUsername ? 'Enter your username' : 'Enter your email'
              }
            />
            {errors.email && (
              <p className="text-destructive text-sm">{errors.email.message}</p>
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
  );
};

export default LoginPage;
