import { Link } from "react-router"

const ContactLists = (
  {contacts}:{contacts: {
    id: number
    name: string
    image: string
    preview: string
  }[]}
) => {
  return (
    <div className="h-full flex-1 overflow-y-auto">
      {contacts.map((contact) => (
        <Link key={contact.id} to={`/chat/${contact.id}`}>
          <div className="flex cursor-pointer items-center border-b border-gray-100 p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
            <img
              src={contact.image}
              alt={contact.name}
              className="mr-3 h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-100">
                {contact.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {contact.preview}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ContactLists
