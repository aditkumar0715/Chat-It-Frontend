import { Send } from 'lucide-react';

const ChatForm = () => {
  return (
    <form className="flex items-center border-t border-gray-200 p-4 dark:border-gray-700">
      <input
        type="text"
        placeholder="Type your message..."
        className="focus:border-primary flex-1 rounded-md border border-gray-300 p-3 focus:ring focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
      />
      <button
        type="submit"
        className="bg-primary hover:bg-primary-foreground ml-3 flex items-center justify-center rounded-full p-3 text-white"
      >
        <Send size={18} />
      </button>
    </form>
  );
};

export default ChatForm;
