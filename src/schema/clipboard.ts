import { z } from 'zod'

export const sendToClipboardSchema = z.object({
  text: z.string().min(1, 'Please enter text to send'),
})
export type SendToClipboard = z.infer<typeof sendToClipboardSchema>

export const retrieveFromClipboardSchema = z.object({
  code: z.coerce.number().min(100000, 'Invalid code').max(999999, 'Invalid code'),
})
export type RetireveFromClipboard = z.infer<typeof retrieveFromClipboardSchema>
