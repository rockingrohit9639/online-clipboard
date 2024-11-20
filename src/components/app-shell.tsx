import { cn } from '@/lib/utils'
import Navbar from './navbar'

type AppShellProps = {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

export default function AppShell({ className, style, children }: AppShellProps) {
  return (
    <div className={cn('h-full w-full', className)} style={style}>
      <Navbar />
      {children}
    </div>
  )
}
