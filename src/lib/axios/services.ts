import api from './api';
import { ISignupInputs, ILoginInputs, IAddFriendInput } from '@/types/types';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { string } from 'zod';

// register
export const signupUser = async (userData: ISignupInputs) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    // Handle error
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
    // Handle error
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
    // Handle error
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.error); // Display error message using toast
    } else {
      toast.error('An error occurred during signup.'); // Fallback error message
    }
    console.error('Signup error:', error);
  }
};

// get current user details
export const getMyDetails = async () => {
  try {
    const response = await api.get('/me');
    return response.data;
  } catch (error) {
    // Handle error
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.error); // Display error message using toast
    } else {
      toast.error('An error occurred during signup.'); // Fallback error message
    }
    console.error('Signup error:', error);
  }
};

// add friend
export const addFriend = async (data: IAddFriendInput) => {
  try {
    const response = await api.patch('/addFriend', data);
    return response.data;
  } catch (error) {
    // Handle error
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.message); // Display error message using toast
    } else {
      toast.error('An error occurred while adding friend.'); // Fallback error message
    }
    console.error('Error while adding Friend :', error);
  }
};

// get friend list
export const getMyFriends = async () => {
  try {
    const response = await api.get('/allFriends');
    return response.data;
  } catch (error) {
    // Handle error
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.error);
    } else {
      toast.error('Error occured while fetching Friends.');
    }
    console.error('Fetch Friends error: ', error);
  }
};

// get user details by id or username
export const getUserDetails = async (data: {
  userId?: string;
  username?: string;
}) => {
  try {
    let query: string = '';
    if (data?.userId) {
      query = `userId=${data?.userId}`;
    } else {
      query = `username=${data?.username}`;
    }
    const response = await api.get(`/user?${query}`);
    return response.data;
  } catch (error) {
    // Handle error
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.error);
    } else {
      toast.error('Error occured while fetching user details.');
    }
    console.error('Fetch User Details error: ', error);
  }
};

// create or join room
export const joinOrCreateRoom = async (data: { id: string }) => {
  try {
    const response = await api.post('/room/findOrCreate', data);
    return response.data;
  } catch (error) {
    // Handle error
    toast.error(error as string);
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.error);
    } else {
      toast.error('Error occured while joining room');
    }
    console.log('join room error: ', error);
    return error;
  }
};
