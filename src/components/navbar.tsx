import { cn } from '@/lib/utils'

type NavbarProps = {
  className?: string
  style?: React.CSSProperties
}

export default function Navbar({ className, style }: NavbarProps) {
  return (
    <nav
      className={cn(
        'fixed left-0 top-0 flex h-16 w-full items-center justify-center border-b bg-background/5 backdrop-blur-lg',
        className,
      )}
      style={style}
    >
      <p className="text-center text-xl font-bold">Clipboard 📋</p>
    </nav>
  )
}
