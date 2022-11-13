import Head from 'next/head'
import Layout from '../../components/Layout';
import { Key } from 'react';
import fs from 'fs';
import Link from 'next/link';
// const matter = require('gray-matter')
// @ts-ignore
import matter from 'gray-matter';

export interface Posts {
  posts: [{
    slug: Key,
    frontmatter: {
      title: string,
      date: string,
      description: string,
      tags: Key[]
    },
    content: string
  }]
}

export default function Blogs({ posts }: Posts) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CSE Society &#x2223; Blogs</title>
      </Head>
      <Layout>
        {posts?.length > 0 && posts.map(({ frontmatter: { title, date, description, tags }, slug }) => {
          return (
          <Link href={'/blogs/[slug]'} as={`/blogs/${slug}`} key={slug}>
            <div  className='blog-cards'>
              <div className="blog-timestamp">
                <span className='blog-date'>{date}</span>
              </div>
              <div className="blog-details">
                <header>
                  <div>
                      <div className='blog-title'>{title}</div>
                  </div>
                </header>
                <section className='blog-description'>
                  {description}
                </section>
                <section className='tags'>
                  {tags.map((tag) => {
                    return (
                      <span key={tag} className='tag'>
                        {tag}
                      </span>
                    )
                  })}
                </section>
              </div>
            </div>
            </Link>
          )}
        )}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`)
  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/posts/${filename}`).toString()
    const { data, content } = matter(markdownWithMetadata);
    const frontmatter = {
      ...data,
    };

    return {
      slug: filename.replace('.md', ''),
      frontmatter,
      content
    };
  })

  return { props: { posts } };
}