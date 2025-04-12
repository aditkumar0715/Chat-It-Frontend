import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import ContactLists from '@/components/chat/ContactLists';
import SearchFilter from '@/components/chat/SearchFilter';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { toast } from 'react-toastify';

const contacts = [
  {
    id: 1,
    name: 'Alice Johnson',
    image:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=64&h=64&q=80',
    preview: 'Hey, are we still meeting tomorrow?',
  },
  {
    id: 2,
    name: 'Bob Smith',
    image:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=facearea&facepad=2&w=64&h=64&q=80',
    preview: 'I have sent the documents.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    image:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=64&h=64&q=80',
    preview: 'Hey, are we still meeting tomorrow?',
  },
  {
    id: 4,
    name: 'Bob Smith',
    image:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=facearea&facepad=2&w=64&h=64&q=80',
    preview: 'I have sent the documents.',
  },
  {
    id: 5,
    name: 'Alice Johnson',
    image:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=64&h=64&q=80',
    preview: 'Hey, are we still meeting tomorrow?',
  },
  {
    id: 6,
    name: 'Bob Smith',
    image:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=facearea&facepad=2&w=64&h=64&q=80',
    preview: 'I have sent the documents.',
  },
  {
    id: 7,
    name: 'Alice Johnson',
    image:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=64&h=64&q=80',
    preview: 'Hey, are we still meeting tomorrow?',
  },
  {
    id: 8,
    name: 'Bob Smith',
    image:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=facearea&facepad=2&w=64&h=64&q=80',
    preview: 'I have sent the documents.',
  },
  {
    id: 9,
    name: 'Alice Johnson',
    image:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=64&h=64&q=80',
    preview: 'Hey, are we still meeting tomorrow?',
  },
  {
    id: 10,
    name: 'Bob Smith',
    image:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=facearea&facepad=2&w=64&h=64&q=80',
    preview: 'I have sent the documents.',
  },
  {
    id: 11,
    name: 'Alice Johnson',
    image:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=64&h=64&q=80',
    preview: 'Hey, are we still meeting tomorrow?',
  },
  {
    id: 12,
    name: 'Bob Smith',
    image:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=facearea&facepad=2&w=64&h=64&q=80',
    preview: 'I have sent the documents.',
  },
  // add more contacts as needed
];

const ChatPage = () => {
  const [leftWidth, setLeftWidth] = useState(300); // default left panel width in px
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error('Please login to access the chat page.', {});
      navigate('/login');
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="mx-auto flex max-h-screen w-full max-w-[2000px]"
    >
      {/* Left Sidebar */}
      <div style={{ width: leftWidth }}>
        <div className="flex h-full flex-col border-r border-gray-200 dark:border-gray-700">
          <SearchFilter />
          <ContactLists contacts={contacts} />
        </div>
      </div>

      {/* Draggable Separator */}
      <div
        ref={dragRef}
        onMouseDown={() => setIsDragging(true)}
        className="w-1 cursor-col-resize bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
      />

      {/* Right Chat Section */}
      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>
    </div>
  );
};

export default ChatPage;
