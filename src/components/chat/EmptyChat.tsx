import { Link } from 'react-router';
import { MessageSquare, UserPlus } from 'lucide-react';
import { Button } from '../ui/button';

const EmptyChat = () => {
  return (
    <div className="bg-background flex h-full flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center space-y-4">
        <MessageSquare size={64} className="text-primary" />
        <h1
          className="text-4xl font-bold"
          style={{ color: 'var(--color-foreground)' }}
        >
          Chat-It
        </h1>
      </div>
      <p
        className="mt-4 max-w-md text-center text-lg"
        style={{ color: 'var(--color-muted-foreground)' }}
      >
        Welcome to Chat-It. Select a conversation from the list or start a new
        chat to begin messaging.
      </p>
      <Button size="lg" className="mt-4">
        <UserPlus />
        <span className="font-semibold">New Chat</span>
      </Button>
    </div>
  );
};

export default EmptyChat;
