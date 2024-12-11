'use server'

import { revalidatePath } from 'next/cache'
import { createTodo } from './todos'
type TodoActionState = {
  success?: string
  error?: string
}
export async function createTodoAction(
  state: TodoActionState,
  formData: FormData
) {
  const title = formData.get('title') as string
  try {
    await createTodo(title)
    return { success: 'Todo added successfully.' }
  } catch (error: unknown) {
    return { error: (error as Error)?.message || 'Failed to add todo.' }
  } finally {
    revalidatePath('/')
  }
}
