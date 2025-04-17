import { Message, JoinRoomPayload, SendMessagePayload } from '@/types/types';
import { Socket } from 'socket.io-client';

export const joinRoom = (socket: Socket, payload: JoinRoomPayload) => {
  socket.emit('joinRoom', payload);
  socket.emit('fetchMessages', { roomId: payload.roomId });
};

export const leaveRoom = (socket: Socket, payload: { userId: string }) => {
  socket.emit('leaveRoom', payload);
};

export const sendMessage = (socket: Socket, payload: SendMessagePayload) => {
  socket.emit('chatMessage', payload);
};

export const registerChatListeners = (
  socket: Socket,
  onPastMessages: (messages: Message[]) => void,
  onNewMessage: (msg: Message) => void,
  onError?: (err: string) => void
) => {
  socket.on('message', (response) => {
    console.log("response on message event: ",response);
    if (response.success) onNewMessage(response.data);
  });

  socket.on('pastMessages', (response) => {
    if (response.success) onPastMessages(response.data.reverse());
  });

  socket.on('error', (err) => {
    console.error('Socket error:', err);
    if (onError) onError(err.message || 'Socket error');
  });
};

export const removeChatListeners = (socket: Socket) => {
  socket.off('message');
  socket.off('pastMessages');
  socket.off('error');
  socket.disconnect(); // Disconnect the socket if needed
};
