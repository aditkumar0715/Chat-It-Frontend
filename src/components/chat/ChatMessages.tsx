const ChatMessages = ({
  messages,
}: {
  messages: { id: number; text: string; from: string }[];
}) => {
  return (
    <div className="h-full flex-1 space-y-4 overflow-auto bg-gray-50 p-4 dark:bg-gray-900">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${
            msg.from === 'self' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`max-w-xs rounded-lg p-3 ${
              msg.from === 'self'
                ? 'rounded-br-none bg-blue-500 text-white'
                : 'rounded-bl-none bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100'
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
