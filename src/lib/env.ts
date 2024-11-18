import { z } from 'zod'

export const env = z
  .object({
    CONVEX_DEPLOYMENT: z.string().min(1, 'Missing convex deployment'),
    VITE_CONVEX_URL: z.string().min(1, 'Missing vite convex URL'),
  })
  .parse(import.meta.env)
