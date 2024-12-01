import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SendToClipboard, sendToClipboardSchema } from '@/schema/clipboard'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { useMutation } from '@tanstack/react-query'
import { useConvexMutation } from '@convex-dev/react-query'
import { api } from 'convex/_generated/api'
import { useState } from 'react'
import When from '../when'
import { Input } from '../ui/input'
import { toast } from 'sonner'

export default function SendToClipboardForm() {
  const [code, setCode] = useState<number | null>(null)

  const form = useForm<SendToClipboard>({
    resolver: zodResolver(sendToClipboardSchema),
    defaultValues: {
      text: '',
    },
  })

  const createClipMutation = useMutation({
    mutationFn: useConvexMutation(api.clipboard.createNewClip),
    onSuccess: (data: { code: number }) => {
      form.reset()
      setCode(data.code)
    },
  })

  function handleSendToClipboard(values: SendToClipboard) {
    createClipMutation.mutate(values)
  }

  function handleCopyCode() {
    navigator.clipboard.writeText(code?.toString() ?? '').then(() => {
      toast.success('Code copied successfully.')
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSendToClipboard)} className="mb-4 grid gap-4">
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Text to send</FormLabel>
              <FormControl>
                <Textarea rows={5} placeholder="Enter the text here that you want to send..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={createClipMutation.isPending}>Send to clipboard</Button>
      </form>

      <When condition={!!code}>
        <div className="flex items-center gap-4">
          <Input disabled value={code ?? ''} />
          <Button onClick={handleCopyCode}>Copy code</Button>
        </div>
      </When>
    </Form>
  )
}
