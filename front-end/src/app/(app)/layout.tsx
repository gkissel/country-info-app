import { House } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full min-h-screen">
      <header className="w-full h-20 bg-primary border-b">
        <div className="w-full mx-auto px-5 xl:px-0 max-w-7xl">
          <div className="flex h-20 items-center ">
            <Link href="/" className="w-fit">
              <Button
                size="icon"
                className="text-primary-foreground text-2xl border border-primary-foreground/45 hover:border-primary-foreground"
              >
                <House />
              </Button>
            </Link>
          </div>
        </div>
      </header>
      {children}
    </main>
  )
}
