import NewTodoForm from '@/components/NewTodoForm'
import TodoList from '@/components/todo-list'
import React from 'react'

export default function HomePage() {
  return (
    <section className='py-24'>
      <div className='container mx-auto flex w-full max-w-2xl flex-col'>
        <h1 className='font-serif text-3xl font-medium'>
          Keep Track of your tasks
        </h1>
        <NewTodoForm />
        <TodoList />
      </div>
    </section>
  )
}
