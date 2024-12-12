import { Button } from '@/components/ui/button'

import { Bookmark, Home } from 'lucide-react'
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
      <Button>Notifications</Button>
      <Button>Messages</Button>

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
