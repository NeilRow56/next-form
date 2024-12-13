import db from './db'

export async function getGategories() {
  return await db.category.findMany({
    orderBy: {
      name: 'desc'
    }
  })
}
