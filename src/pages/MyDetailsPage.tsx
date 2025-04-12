import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { IUser } from '@/types/types';
import { getMyDetails } from '@/lib/axios/services';
import { Button } from '@/components/ui/button';

const MyDetailsPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null); // State to hold user details
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  // const user = useSelector((state: RootState) => state.auth.user) as IUser;
  const fetchUserDetails = async () => {
    const response: { success: boolean; data: IUser; message: string } =
      await getMyDetails(); // Call the API to get user details
    if (response.success !== true) {
      toast.error(response.message); // Display error message using toast
      return;
    }
    console.log(response);
    setUser(response.data); // Set user details in state
  };

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error('Please login to access this page.');
      navigate('/login');
    }
    fetchUserDetails(); // Fetch user details when the component mounts
  }, []);

  return (
    <div className="bg-background text-foreground flex-1 p-4 sm:p-6">
      <div className="bg-card mx-auto max-w-4xl rounded-lg shadow-lg">
        {user && (
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar for profile picture and basic info */}
            <div className="bg-secondary flex flex-col items-center justify-center p-6 lg:w-1/3">
              <img
                src={user.avatar}
                alt={`${user.name}'s avatar`}
                className="mb-4 h-32 w-32 rounded-full border-4 shadow-lg"
              />
              <h1 className="text-primary text-2xl font-bold">{user.name}</h1>
              <p className="text-muted-foreground">@{user.username}</p>
            </div>

            {/* Main content area for details */}
            <div className="flex flex-col space-y-6 p-6 lg:w-2/3">
              {/* About / Bio */}
              <div className="flex flex-col">
                <h2 className="text-secondary-foreground text-xl font-semibold">
                  Bio
                </h2>
                <p className="text-muted-foreground">{user.bio}</p>
              </div>

              {/* Contact information */}
              <div className="flex flex-col">
                <h2 className="text-secondary-foreground text-xl font-semibold">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">Email: {user.email}</p>
              </div>

              {/* Additional details */}
              <div className="flex flex-col">
                <h2 className="text-secondary-foreground text-xl font-semibold">
                  Additional Details
                </h2>
                <p className="text-muted-foreground">Age: {user.age}</p>
                <p className="text-muted-foreground">Gender: {user.gender}</p>
              </div>

              {/* Friends list */}
              <div className="flex flex-col">
                <h2 className="text-secondary-foreground text-xl font-semibold">
                  Friends
                </h2>
                <p className="text-muted-foreground">
                  Number of conacts: {user?.friends.length}
                </p>
                <p className="text-muted-foreground">
                  Blocked contacts: {user?.blocked.length}
                </p>
              </div>

              {/* Timestamps */}
              <div className="text-muted-foreground border-border flex flex-col justify-between gap-4 border-t pt-3 text-xs sm:flex-row sm:items-center">
                <div>
                  <p>
                    Created at : {new Date(user.createdAt).toLocaleString()}
                  </p>
                  <p>
                    Last Updated : {new Date(user.updatedAt).toLocaleString()}
                  </p>
                </div>
                <Link to="/me/update">
                  <Button variant="link">Update</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyDetailsPage;
