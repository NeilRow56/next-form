import SearchField from '@/components/SearchField'
import ThemeToggle from '@/components/ThemeToggle'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className='sticky top-0 z-10 bg-card shadow-sm'>
      <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 px-5 py-3'>
        <Link href='/' className='text-2xl font-bold text-primary'>
          bugbook
        </Link>
        <SearchField />
        <div className='flex items-center gap-3'>
          <ThemeToggle />
          <UserButton />
        </div>
      </div>
    </header>
  )
}
