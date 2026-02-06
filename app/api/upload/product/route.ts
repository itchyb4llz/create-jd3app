import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'
import { writeFile } from 'fs/promises'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('file') as File

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // folder: public/uploads/products
  const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'products')

  // create folder if missing
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true })
  }

  const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`
  const filepath = path.join(uploadDir, filename)

  await writeFile(filepath, buffer)

  return NextResponse.json({ path: `/uploads/products/${filename}` })
}
