import Head from 'next/head';
import Layout from '../../components/Layout';
import Vision from '../../components/Vision';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CSE Society &#x2223; Vision</title>
      </Head>
      <Layout>
        <Vision />
      </Layout>
    </>
  )
}