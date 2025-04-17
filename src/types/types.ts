import { z } from 'zod';
import { userSchema } from '@/lib/zod';
import { signupSchema } from '@/lib/zod';
import { loginSchema } from '@/lib/zod';
import { friendSchema } from '@/lib/zod';
import { AddFriendSchema } from '@/lib/zod';

export type ITheme = 'dark' | 'light';
export type IUser = z.infer<typeof userSchema>;
export type ISignupInputs = z.infer<typeof signupSchema>;
export type ILoginInputs = z.infer<typeof loginSchema>;
export type IFriend = z.infer<typeof friendSchema>;
export type IAddFriendInput = z.infer<typeof AddFriendSchema>;

export interface AddFriendModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface Message {
  _id: string;
  content: string;
  senderId: string;
  createdAt: string;
  sender?: string;
}

export interface JoinRoomPayload {
  roomId: string;
  userId: string;
}

export interface SendMessagePayload {
  roomId: string;
  senderId: string;
  message: string;
}

export interface ChatFormProps {
  messageInput: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSendMessage: (e: React.FormEvent) => void;
}

export interface ChatMessagesProps {
  messages: Message[];
}