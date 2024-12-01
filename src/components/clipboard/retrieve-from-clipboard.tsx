import { RetireveFromClipboard, retrieveFromClipboardSchema } from '@/schema/clipboard'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useMutation } from '@tanstack/react-query'
import { useConvexMutation } from '@convex-dev/react-query'
import { api } from 'convex/_generated/api'
import When from '../when'
import { Textarea } from '../ui/textarea'
import { toast } from 'sonner'

export default function RetrieveFromClipboard() {
  const form = useForm<RetireveFromClipboard>({
    resolver: zodResolver(retrieveFromClipboardSchema),
  })

  const retrieveFromClipboardMutation = useMutation({
    mutationFn: useConvexMutation(api.clipboard.getClipByCode),
  })

  function handleRetrieveFromClipboard(values: RetireveFromClipboard) {
    retrieveFromClipboardMutation.mutate(values)
  }

  function handleCopyText() {
    if (!retrieveFromClipboardMutation.data) {
      return
    }

    navigator.clipboard.writeText(retrieveFromClipboardMutation.data.text).then(() => {
      toast.success('Text is copied successfully.')
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleRetrieveFromClipboard)} className="mb-4 grid gap-4">
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Code</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter code of clipboard" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button>Retrieve from clipboard</Button>
      </form>

      <When condition={!!retrieveFromClipboardMutation.data}>
        <div className="flex items-end gap-4">
          <Textarea disabled value={retrieveFromClipboardMutation.data?.text} rows={4} />
          <Button onClick={handleCopyText}>Copy text</Button>
        </div>
      </When>
    </Form>
  )
}
