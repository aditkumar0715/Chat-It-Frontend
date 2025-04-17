import { ChatMessagesProps } from '@/types/types';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <div className="bg-background h-full flex-1 space-y-4 overflow-auto p-4">
      {messages.map((msg) => (
        <div
          key={msg._id}
          className={`flex ${
            msg?.sender === user?._id ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`max-w-xs rounded-lg p-3 ${
              msg.sender === user?._id
                ? 'bg-primary text-secondary-foreground rounded-br-none'
                : 'bg-secondary text-secondary-foreground rounded-bl-none'
            }`}
          >
            {msg.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
