'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createTodoAction } from '@/lib/actions'
import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'

export default function NewTodoForm() {
  const [state, formAction, insPending] = useActionState(createTodoAction, {
    success: '',
    error: undefined
  })

  useEffect(() => {
    if (state.error) {
      toast.error(state.error)
    }
  }, [state.error])

  useEffect(() => {
    if (state.success) {
      toast.success(state.success)
    }
  }, [state.success])
  return (
    <form action={formAction}>
      <div className='text-red-500'>{state.error}</div>
      <div className='mt-12 flex gap-3'>
        <Input type='text' name='title' placeholder='Enter a task' />
        <Button type='submit'>{insPending ? 'Adding...' : 'Add Task'}</Button>
      </div>
    </form>
  )
}
