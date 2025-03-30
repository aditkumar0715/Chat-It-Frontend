
import { MessageSquare, PlusCircle } from 'lucide-react'

const EmptyChat = () => {
  return (
    <div
      className="flex h-full flex-col items-center justify-center p-6 bg-background"
    >
      <div className="flex flex-col items-center space-y-4">
        <MessageSquare size={64} className='text-primary' />
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
      <button
        className="mt-6 flex items-center space-x-2 rounded-full px-6 py-3 shadow-lg transition-colors duration-200 focus:outline-none"
        style={{
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-primary-foreground)',
        }}
      >
        <PlusCircle size={20} />
        <span className="font-semibold">New Chat</span>
      </button>
    </div>
  )
}



export default EmptyChat
