import api from './api';
import { ISignupInputs, ILoginInputs } from '@/types/types';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

// register
export const signupUser = async (userData: ISignupInputs) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    // Handle error if the signup fails
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.error); // Display error message using toast
    } else {
      toast.error('An error occurred during signup.'); // Fallback error message
    }
    console.error('Signup error:', error);
  }
};

// login
export const loginUser = async (creadentials: ILoginInputs) => {
  try {
    const response = await api.post('/login', creadentials);
    return response.data;
  } catch (error) {
    // Handle error if the signup fails
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.error); // Display error message using toast
    } else {
      toast.error('An error occurred during signup.'); // Fallback error message
    }
    console.error('Signup error:', error);
  }
};

// logout
export const logoutUser = async () => {
  try {
    const response = await api.get('/logout');
    return response.data;
  } catch (error) {
    // Handle error if the signup fails
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.error); // Display error message using toast
    } else {
      toast.error('An error occurred during signup.'); // Fallback error message
    }
    console.error('Signup error:', error);
  }
};

// get user details
export const getMyDetails = async () => {
  try {
    const response = await api.get('/me');
    return response.data;
  } catch (error) {
    // Handle error if the signup fails
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.error); // Display error message using toast
    } else {
      toast.error('An error occurred during signup.'); // Fallback error message
    }
    console.error('Signup error:', error);
  }
};

