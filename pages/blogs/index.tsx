import Head from 'next/head'
import Layout from '../../components/Layout';
import { Key } from 'react';
import fs from 'fs';
import Link from 'next/link';
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
        <div className="blogs">
          {posts?.length > 0 && posts.map(({ frontmatter: { title, date, description, tags }, slug }) => {
            return (
              <Link href={'/blogs/[slug]'} as={`/blogs/${slug}`} key={slug}>
                <div className='blog-cards'>
                  <div className="blog-thumb">

                  </div>
                  <div className="blog-details">
                    <header>
                      <div className='blog-title'>{title}</div>
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
                    <section className='blog-bottom'>
                      <div className='blog-author'>
                        <div className="author-thumb">

                        </div>
                        <div className="author-name">
                          Rahul Ranjan
                        </div>
                      </div>
                      <div className='blog-timestamp'>{date}</div>
                    </section>
                  </div>
              </Link>
            )
          }
          )}
        </div>
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
    // console.log(data);
    // console.log(data["date"]);
    const frontmatter = {
      ...data,
    };
    return {
      slug: filename.replace('.md', ''),
      frontmatter,
      content
    };
  })
  posts.sort((a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf())
  return { props: { posts } };
}