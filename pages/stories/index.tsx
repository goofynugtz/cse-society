import Head from 'next/head'
import Layout from '../../components/Layout';
import fs from 'fs';
import Image from 'next/image';
import Link from 'next/link';
export default function Home({ stories }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CSE Society &#x2223; Stories</title>
      </Head>
      <Layout>
        <div className="stories">
          <h1>Stories</h1>
          <div className="story-cards">
            {stories.map((i: any) => {
              return (
                <Link href={`/stories/[slug]`} as={`/stories/${i.slug}`} key={i.slug}>
                  <div key={i.slug} className="story">
                    <div className="marble" >
                      <Image alt='' src={`/assets/${i.thumbnail}`} fill />
                    </div>
                    <div className="label">{`${i.slug}`}</div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const path = `${process.cwd()}/content/stories`
  const stories = fs.readdirSync(path).map((folder) => {
    const storyPath = path + '/' + folder;
    return {
      slug: folder,
      thumbnail: fs.readdirSync(storyPath)[0],
    }
  })
  return { props: { stories } };
}