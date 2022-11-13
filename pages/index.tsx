import Head from 'next/head'
import Layout from '../components/Layout';
import Stories from '../components/Stories';

export default function Home() {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CSE Society &#x2223; Durgapur</title>
      </Head>
      <Layout>
        <div className='background'></div>
        <Stories />
      </Layout>
    </>
  )
}