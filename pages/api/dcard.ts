// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const url = await fetch('https://www.dcard.tw/service/api/v2/posts')
  // const data = await url.json()
  // res.status(200).json({ data })
}
