import NewTodoForm from '@/components/NewTodoForm'
import React from 'react'

export default function HomePage() {
  return (
    <section className='py-24'>
      <div className='container max-w-2xl'>
        <h1 className='font-serif text-3xl font-medium'>
          Keep Track of your tasks
        </h1>
        <NewTodoForm />
      </div>
    </section>
  )
}
