import { z } from 'zod'

export const sendToClipboardSchema = z.object({
  text: z.string().min(1, 'Please enter text to send'),
})
export type SendToClipboard = z.infer<typeof sendToClipboardSchema>
