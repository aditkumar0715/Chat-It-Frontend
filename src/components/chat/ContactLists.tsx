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
          <div className="border-border hover:bg-secondary flex cursor-pointer items-center border-b p-4">
            <img
              src={contact.image}
              alt={contact.name}
              className="mr-3 h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-foreground">
                {contact.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {contact.preview}
              </p>  
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ContactLists
