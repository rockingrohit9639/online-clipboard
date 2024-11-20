import { z } from 'zod'

console.log(import.meta.env)

export const env = z
  .object({
    CONVEX_DEPLOYMENT: z.string().min(1, 'Missing convex deployment').optional(),
    VITE_CONVEX_URL: z.string().min(1, 'Missing vite convex URL'),
  })
  .parse(import.meta.env)
