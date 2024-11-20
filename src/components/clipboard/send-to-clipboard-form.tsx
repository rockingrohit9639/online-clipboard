import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SendToClipboard, sendToClipboardSchema } from '@/schema/clipboard'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

export default function SendToClipboardForm() {
  const form = useForm<SendToClipboard>({
    resolver: zodResolver(sendToClipboardSchema),
    defaultValues: {
      text: '',
    },
  })

  function handleSendToClipboard(values: SendToClipboard) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSendToClipboard)} className="grid gap-4">
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

        <Button>Send to clipboard</Button>
      </form>
    </Form>
  )
}
