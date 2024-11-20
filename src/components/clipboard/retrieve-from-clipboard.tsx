import { RetireveFromClipboard, retrieveFromClipboardSchema } from '@/schema/clipboard'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function RetrieveFromClipboard() {
  const form = useForm<RetireveFromClipboard>({
    resolver: zodResolver(retrieveFromClipboardSchema),
  })

  function handleRetrieveFromClipboard(values: RetireveFromClipboard) {
    console.log(values)
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
    </Form>
  )
}
