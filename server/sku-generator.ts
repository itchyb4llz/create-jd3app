import { db } from '@/server/drizzle'
import { products } from '@/server/drizzle/schema'
import { eq } from 'drizzle-orm'

export async function skuGenerator(productName: string): Promise<string> {
  const prefix = productName
    .replace(/[^A-Za-z]/g, '') // keep only letters
    .substring(0, 3)
    .toUpperCase()

  let sku = ''
  let exists = true

  while (exists) {
    const random = Math.floor(10000 + Math.random() * 90000) // 5 digits
    sku = `${prefix}-${random}`

    const result = await db.select().from(products).where(eq(products.sku, sku)).limit(1)

    exists = result.length > 0
  }

  return sku
}
