import { getContacts } from '@/actions/actions'
import { Sidebar } from '@/components/Sidebar'
import Link from 'next/link'

export default async function ContactsPage() {
  const { success, contacts = [], error } = await getContacts()

  if (!success) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <Sidebar count={contacts.length} />
      <main className='ml-64 flex-1'>
        <div className='p-6'>
          <div className='mb-4 flex items-center justify-between'>
            <h1 className='text-2xl font-semibold'>
              Contacts ({contacts.length})
            </h1>
          </div>

          <div className='rounded-lg border'>
            <div className='grid grid-cols-[1fr,1.5fr,1fr] border-b bg-muted/50 p-3'>
              <div>Name</div>
              <div>Email</div>
              <div>Phone number</div>
            </div>

            {contacts.length > 0 ? (
              <div className='divide-y'>
                {contacts.map(contact => (
                  <Link
                    key={contact.id}
                    href={`/contacts/${contact.id}`}
                    className='grid grid-cols-[1fr,1.5fr,1fr] items-center p-3 hover:bg-muted/50'
                  >
                    <div className='flex items-center gap-3'>
                      <div className='flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white'>
                        {contact.name[0]}
                      </div>
                      <span>{contact.name}</span>
                    </div>
                    <div>{contact.email}</div>
                    <div>{contact.phone}</div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className=''>
                <p className='p-4'>No Contacts</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
