import ChatHeader from '@/components/chat/ChatHeader';
import ChatMessages from '@/components/chat/ChatMessages';
import ChatForm from '@/components/chat/ChatForm';
import { useParams } from 'react-router';
import { joinOrCreateRoom } from '@/lib/axios/services';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { RootState } from '@/lib/redux/store';
import { socket } from '@/lib/socket/socket';
import { Message } from '@/types/types';
import {
  joinRoom,
  leaveRoom,
  registerChatListeners,
  removeChatListeners,
  sendMessage,
} from '@/lib/socket/chatEvents';


const UserChats = () => {
  const { id } = useParams<string>();

  const user = useSelector((state: RootState) => state.auth.user);
  const [roomId, setRoomId] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const join = async () => {
    const response = await joinOrCreateRoom({ id: id! });
    // console.log('response', response);

    if (!response.success)
      toast.error(
        `Error while joining room: ${response.response.data.message}`
      );
    setRoomId(response.data._id);
    
    if (!socket.connected) {
      socket.connect();
    }

    joinRoom(socket, { userId: user?._id!, roomId: response.data._id });

    registerChatListeners(
      socket,
      (pastMessages) => setMessages(pastMessages),
      (newMessage) => setMessages((prev) => {
        if (!prev.find((msg) => msg._id === newMessage._id)) {
          return [...prev, newMessage];
        }
        return prev;
      }),
      (err) => console.error('Socket error:', err)
    );
  };

  useEffect(() => {
    join();

    return () => {
      leaveRoom(socket, { userId: user?._id! });
      removeChatListeners(socket);
      socket.disconnect();
    };
  }, [id]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    sendMessage(socket, {
      roomId,
      senderId: user?._id!,
      message: input,
    });

    setInput('');
  };

  return (
    <div className="flex h-full w-full flex-col">
      {/* Chat Header */}
      <ChatHeader id={id!} />

      {/* Chat Messages */}
      <ChatMessages messages={messages} />

      {/* Chat Form */}
      <ChatForm
        messageInput={input}
        onInputChange={(e) => setInput(e.target.value)}
        onSendMessage={handleSend}
      />
    </div>
  );
};

export default UserChats;
