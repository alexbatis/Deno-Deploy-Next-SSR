import { Laugh } from 'lucide-react';
import './globals.css'

export const metadata = {
  title: 'Chuck Norris Jokes',
  description: 'Random Chuck Norris jokes served with SSR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <Laugh className="text-blue-500" size={32} />
                <span className="ml-2 text-xl font-bold">Chuck Jokes</span>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}