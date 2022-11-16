import Head from 'next/head'
import Layout from '../components/Layout';
import Stories from '../components/Stories';
import fs from 'fs';


export default function Home({ stories }:any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CSE Society &#x2223; Durgapur</title>
      </Head>
      <Layout>
        <div className='background'></div>
        <Stories stories={stories}/>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const path = `${process.cwd()}/content/stories`
  const stories = fs.readdirSync(path).map((folder) => {
    const storyPath = path+'/'+folder;
    return {
      key: folder,
      value: fs.readdirSync(storyPath),
    }
  })
  return {props: {stories}};
}