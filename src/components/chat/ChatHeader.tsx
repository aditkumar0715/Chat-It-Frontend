import React from 'react'
import {Info} from 'lucide-react'

const ChatHeader = () => {
  return (
    <div className="flex items-center border-b border-gray-200 p-4 dark:border-gray-700">
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=64&h=64&q=80"
        alt="Chat Partner"
        className="mr-3 h-10 w-10 rounded-full object-cover"
      />
      <div className="flex-1">
        <p className="font-medium text-gray-800 dark:text-gray-100">Jane Doe</p>
      </div>
      <button
        className="flex items-center space-x-1 rounded-md border border-gray-300 px-3 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
        title="View Info"
      >
        <Info size={16} />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          Info
        </span>
      </button>
    </div>
  )
}

export default ChatHeader