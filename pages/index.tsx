import Head from 'next/head'
import Layout from '../components/Layout';
import Stories from '../components/Stories';
import fs from 'fs';
import News from '../components/News';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import backgroundImage from '../public/assets/background.jpg'


export default function Home({ stories }:any) {
  /* const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
  }, []) */

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CSE Society &#x2223; Durgapur</title>
      </Head>
      <Layout>
        <div className='background'>
        <Image priority alt='' src={backgroundImage} fill style={{
          objectFit:'cover'}}/>
        </div>
        <Stories stories={stories}/>
        <News />
      </Layout>
    </>
  )
}



export async function getStaticProps() {
  const path = `${process.cwd()}/content/stories`
  const stories = fs.readdirSync(path).map((folder) => {
    const storyPath = path+'/'+folder;
    return {
      name: folder,
      thumbnail: fs.readdirSync(storyPath)[0],
    }
  })
  return {props: {stories}};
}