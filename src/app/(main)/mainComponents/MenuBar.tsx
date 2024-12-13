import { Button } from '@/components/ui/button'

import { Bell, Bookmark, Home, Mail } from 'lucide-react'
import Link from 'next/link'
import { auth } from '@clerk/nextjs/server'

interface MenuBarProps {
  className?: string
}

export default async function MenuBar({ className }: MenuBarProps) {
  const user = await auth()

  if (!user) return null

  return (
    <div className={className}>
      <Button
        variant='ghost'
        className='flex items-center justify-start gap-3'
        title='Home'
        asChild
      >
        <Link href='/'>
          <Home />
          <span className='hidden lg:inline'>Home</span>
        </Link>
      </Button>
      <Button
        asChild
        variant='ghost'
        className='item-center flex justify-start gap-3'
        title='notifications'
      >
        <Link href='/notifications'>
          <Bell />
          <span className='hidden lg:inline'>Notifications</span>
        </Link>
      </Button>
      <Button
        asChild
        variant='ghost'
        className='item-center flex justify-start gap-3'
        title='messages'
      >
        <Link href='/messages'>
          <Mail />
          <span className='hidden lg:inline'>Messages</span>
        </Link>
      </Button>

      <Button
        variant='ghost'
        className='flex items-center justify-start gap-3'
        title='Bookmarks'
        asChild
      >
        <Link href='/bookmarks'>
          <Bookmark />
          <span className='hidden lg:inline'>Bookmarks</span>
        </Link>
      </Button>
    </div>
  )
}
