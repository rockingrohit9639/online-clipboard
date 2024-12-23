import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { ClipboardIcon } from 'lucide-react'
import SendToClipboardForm from './send-to-clipboard-form'
import RetrieveFromClipboard from './retrieve-from-clipboard'

export default function Clipboard() {
  return (
    <div className="mx-auto flex h-screen w-full max-w-screen-lg items-center justify-center p-4">
      <Tabs defaultValue="send" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger className="flex-1" value="send">
            Send to <ClipboardIcon className="ml-2 size-4" />
          </TabsTrigger>
          <TabsTrigger className="flex-1" value="retrieve">
            Retrieve from <ClipboardIcon className="ml-2 size-4" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="send" className="min-h-96">
          <SendToClipboardForm />
        </TabsContent>
        <TabsContent value="retrieve" className="min-h-96">
          <RetrieveFromClipboard />
        </TabsContent>
      </Tabs>
    </div>
  )
}
