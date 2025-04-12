import { Info, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../ui/button';

const ChatHeader = ({ id }: { id: string | undefined }) => {
  return (
    <div className="flex items-center border-b border-gray-200 p-4 dark:border-gray-700">
      <Link to="/chat" className="mr-4">
        <ChevronLeft />
      </Link>
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=64&h=64&q=80"
        alt="Chat Partner"
        className="mr-3 h-10 w-10 rounded-full object-cover"
      />
      <div className="flex-1">
        <p className="font-medium text-gray-800 dark:text-gray-100">
          Jane Doe{id}
        </p>
      </div>
      <Button variant="ghost">
        <Info />
      </Button>
    </div>
  );
};

export default ChatHeader;
