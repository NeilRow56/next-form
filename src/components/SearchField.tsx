'use client'

import React from 'react'
import { Input } from './ui/input'

import { SearchIcon } from 'lucide-react'

export default function SearchField() {
  return (
    <form onSubmit={() => {}} method='GET' action='/search'>
      <div className='relative'>
        <Input name='q' placeholder='Search' className='pe-10' />
        <SearchIcon className='absolute right-3 top-1/2 size-5 -translate-y-1/2 transform text-muted-foreground' />
      </div>
    </form>
  )
}
