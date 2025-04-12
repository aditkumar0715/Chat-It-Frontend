import ChatHeader from '@/components/chat/ChatHeader'
import ChatMessages from '@/components/chat/ChatMessages'
import ChatForm from '@/components/chat/ChatForm'
import { useParams } from 'react-router'

const messages = [
  { id: 1, text: 'Hi there!', from: 'other' },
  { id: 2, text: 'Hello! How are you?', from: 'self' },
  { id: 3, text: 'I’m doing well, thanks for asking.', from: 'other' },
  { id: 4, text: 'Great to hear!', from: 'self' },
  { id: 5, text: 'Hi there!', from: 'other' },
  { id: 6, text: 'Hello! How are you?', from: 'self' },
  { id: 7, text: 'I’m doing well, thanks for asking.', from: 'other' },
  { id: 8, text: 'Great to hear!', from: 'self' },
  { id: 9, text: 'Hi there!', from: 'other' },
  { id: 10, text: 'Hello! How are you?', from: 'self' },
  { id: 11, text: 'I’m doing well, thanks for asking.', from: 'other' },
  { id: 12, text: 'Great to hear!', from: 'self' },
  { id: 13, text: 'Great to hear!', from: 'self' },
  { id: 14, text: 'Great to hear!', from: 'self' },
  { id: 15, text: 'Great to hear!', from: 'self' },
]

const UserChats = () => {
const { id } = useParams<string>()
  return (
    <div className="flex flex-col h-full w-full">
      {/* Chat Header */}
      <ChatHeader id={id} />

      {/* Chat Messages */}
      <ChatMessages messages={messages} />

      {/* Chat Form */}
      <ChatForm />
    </div>
  )
}

export default UserChats
