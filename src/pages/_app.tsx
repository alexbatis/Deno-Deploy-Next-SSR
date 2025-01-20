import type { AppProps } from 'next/app'
import { Laugh } from 'lucide-react'
import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Logrcoket Powered Jokes</title>
        <meta name="description" content="Random Chuck Norris jokes served with SSR" />
      </Head>
      <div>
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
        <Component {...pageProps} />
      </div>
    </>
  )
}