import { useState, useRef, useEffect } from 'react';
import { useMatch, useNavigate } from 'react-router';
import SearchFilter from '@/components/chat/SearchFilter';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { toast } from 'react-toastify';
import { useMediaQuery } from '@/hooks/customHooks';
import { getMyFriends } from '@/lib/axios/services';
import { IFriend } from '@/types/types';
import FriendsList from '@/components/chat/FriendsList';

const ChatPage = () => {
  const [leftWidth, setLeftWidth] = useState(300); // default left panel width in px
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const isChats = useMatch('/chat/:id');
  const isSmUp = useMediaQuery('(min-width: 640px)');
  const [friends, setFriends] = useState([] as IFriend[]); //

  // Handle dragging for resizing
  useEffect(() => {
    const handleMouseMove = (e: { clientX: number }) => {
      if (!isDragging || !containerRef.current) return;
      const containerLeft = containerRef.current.getBoundingClientRect().left;
      let newWidth = e.clientX - containerLeft;
      // set some min and max width boundaries
      const minWidth = 180;
      const maxWidth = 500;
      if (newWidth < minWidth) newWidth = minWidth;
      if (newWidth > maxWidth) newWidth = maxWidth;
      setLeftWidth(newWidth);
    };

    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const fetchFriends = async () => {
    const response = await getMyFriends();
    if (response.success) {
      setFriends(response.data);
    }
    console.log('Fetched friends:', response.data);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error('Please login to access the chat page.', {});
      navigate('/login');
    }
    fetchFriends();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mx-auto flex max-h-[calc(100vh-4rem)] w-full max-w-[2000px] flex-1 overflow-hidden"
    >
      {/*
On mobile:
/chat → only contacts (100% width)
/chat/:id → only messages (100% width)

On desktop (sm+):
Both panels show with a draggable separator
Left panel uses leftWidth
*/}

      {/* Left Sidebar */}
      {(isSmUp || !isChats) && (
        <div style={{ width: isSmUp ? leftWidth : '100%' }}>
          <div className="border-sidebar-border flex h-full flex-col border-r">
            <SearchFilter />
            <FriendsList friends={friends} />
          </div>
        </div>
      )}

      {/* Draggable Separator - show only if sm+ */}
      {isSmUp && (
        <div
          className="bg-secondary w-1 cursor-col-resize hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          ref={dragRef}
          onMouseDown={() => setIsDragging(true)}
        />
      )}

      {/* Right Chat Section */}
      {(isSmUp || isChats) && (
        <div className="flex flex-1 flex-col">
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default ChatPage;
