import db from '@/lib/db'

export async function getTodos() {
  try {
    const todos = await db.todo.findMany()
    return { todos }
  } catch (error) {
    return { error }
  }
}

export async function createTodo(title: string) {
  try {
    const todo = await db.todo.create({ data: { title } })
    return { todo }
  } catch (error) {
    return { error }
  }
}

export async function getTodoById(id: string) {
  try {
    const todo = await db.todo.findUnique({ where: { id } })
    return { todo }
  } catch (error) {
    return { error }
  }
}

export async function updateTodo(id: string, isCompleted: boolean) {
  try {
    const todo = await db.todo.update({
      where: { id },
      data: { isCompleted }
    })
    return { todo }
  } catch (error) {
    return { error }
  }
}
