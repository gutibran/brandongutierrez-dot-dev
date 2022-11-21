import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import seo from '../seo.config'

export default function Error500() {
  return (
    <main className='bg-red-900 h-screen text-gray-300'>
      <Head>
        <title>{`${seo.siteName} | Error 500`}</title>
        <meta name="description" content="Error 500 page on Brandon Gutierrez's portfolio site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1 className='text-4xl'>Error 500</h1>
        <h2>Internal server error.</h2>
        <Link className='underline' href="/">← Go back</Link>
    </main>
  )
}
