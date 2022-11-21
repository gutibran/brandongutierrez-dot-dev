import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import seo from '../seo.config'

export default function Error404() {
  return (
    <main className='bg-blue-900 h-screen text-gray-300'>
      <Head>
        <title>{`${seo.siteName} | Error 404`}</title>
        <meta name="description" content="Error 404 page on Brandon Gutierrez's portfolio site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1 className='text-4xl'>Error 404</h1>
        <h2>The requested resource does not exist.</h2>
        <Link className='underline' href="/">← Go back</Link>
      </section>
    </main>
  )
}
