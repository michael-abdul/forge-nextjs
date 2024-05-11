import computeHash from '@/libs/computeHash'
import { NextResponse } from 'next/server'


export async function POST(request: any) {
  const { algorithm, inputText } = await request.json()
  let hashValue = computeHash(algorithm, inputText)
  return NextResponse.json({ hashValue: hashValue }, { status: 200 })
}