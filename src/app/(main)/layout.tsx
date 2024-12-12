import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex min-h-screen flex-col'>
      {/* Fixed Header */}
      <header className='fixed left-0 right-0 top-0 z-50 flex h-14 items-center gap-4 border-b bg-background px-4'>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <Menu className='h-5 w-5' />
        </Button>
        <Link href={'/contacts'} className='flex items-center gap-2'>
          <div className='flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white'>
            C
          </div>
          <h1 className='text-xl font-semibold'>Contacts</h1>
        </Link>
        <div className='mx-auto max-w-2xl flex-1'>
          <Input
            type='search'
            placeholder='Search contacts...'
            className='w-full'
          />
        </div>
        <div className='flex items-center gap-2'>
          <Button variant='ghost' size='icon'>
            <span className='sr-only'>Help</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-5 w-5'
            >
              <circle cx='12' cy='12' r='10' />
              <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' />
              <path d='M12 17h.01' />
            </svg>
          </Button>
          <Button variant='ghost' size='icon'>
            <span className='sr-only'>Settings</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-5 w-5'
            >
              <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
              <circle cx='12' cy='12' r='3' />
            </svg>
          </Button>
          <div className='h-8 w-8 rounded-full bg-gray-200' />
        </div>
      </header>

      {/* Sidebar and Main Content */}
      <div className='mt-14 flex flex-1'>{children}</div>
    </div>
  )
}
