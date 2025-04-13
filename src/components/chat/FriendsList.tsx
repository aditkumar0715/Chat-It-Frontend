import { IFriend } from '@/types/types';
import { Link } from 'react-router';

const FriendsList = ({ friends }: { friends: IFriend[] }) => {
  return (
    <div className="h-full flex-1 overflow-y-auto">
      {friends.map((friend) => (
        <Link key={friend._id} to={`/chat/${friend._id}`}>
          <div className="border-border hover:bg-secondary flex cursor-pointer items-center border-b p-4">
            <img
              src={friend.avatar}
              alt={friend.name}
              className="mr-3 h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-foreground font-medium">{friend.name}</p>
              <p className="text-muted-foreground text-sm">
                @{friend.username}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FriendsList;
