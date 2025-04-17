import { Info, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { getUserDetails } from '@/lib/axios/services';
import { IUser } from '@/types/types';

const ChatHeader = ({ id }: { id: string }) => {
  const [user, setUser] = useState({} as IUser);
  const getUser = async () => {
    const response = await getUserDetails({
          userId: id,
        });
    // console.log("User details response: ", response);
    if (!response.success) {
      console.error('Error fetching user details:', response.error);
      return;
    }
    setUser(response.data);
    // return response.data;
  }
  useEffect(() => {
    getUser();
  }, [id]);
  return (
    <div className="flex items-center border-b border-gray-200 p-4 dark:border-gray-700">
      <Link to="/chat" className="mr-4">
        <ChevronLeft />
      </Link>
      <img
        src={user.avatar}
        alt={`${user.name}'s avatar`}
        className="mr-3 h-10 w-10 rounded-full object-cover"
      />
      <div className="flex-1">
        <p className="font-medium text-secondary-foreground">
          {user.name}
        </p>
      </div>
      <Button variant="ghost">
        <Info />
      </Button>
    </div>
  );
};

export default ChatHeader;
