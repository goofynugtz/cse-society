import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../../components/Layout'
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { Key } from 'react';
import Head from 'next/head';
import rangeParser from 'parse-numeric-range'
// @ts-ignore
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface Post {
  frontmatter: {
    title: string,
    date: string,
    description: string,
    tags: Key[]
  },
  content: any
}

export default function Post({ frontmatter, content }: Post) {
  const syntaxTheme = oneDark

  const MarkdownComponents: object = {
    // @ts-ignore
    code({ node, inline, className, ...props }) {
      const match = /language-(\w+)/.exec(className || '')
      const hasMeta = node?.data?.meta
      const applyHighlights: object = (applyHighlights: number) => {
        if (hasMeta) {
          const RE = /{([\d,-]+)}/
          const metadata = node.data.meta?.replace(/\s/g, '')
          const strlineNumbers = RE?.test(metadata)
            // @ts-ignore
            ? RE?.exec(metadata)[1]
            : '0'
          const highlightLines = rangeParser(strlineNumbers)
          const highlight = highlightLines
          // @ts-ignore
          const data: string = highlight.includes(applyHighlights)
            ? 'highlight'
            : null
          return { data }
        } else {
          return {}
        }
      }

      return match ? (
        // @ts-ignore
        <SyntaxHighlighter
          style={syntaxTheme}
          language={match[1]}
          PreTag="div"
          className="codeStyle"
          showLineNumbers={true}
          wrapLines={hasMeta ? true : false}
          useInlineStyles={true}
          lineProps={applyHighlights}
          {...props}
        />
      ) : (
        <code className={className} {...props} />
      )
    },
  }

  return (
    <>
      <Head>
        <title>blogs@ranjanrahul</title>
        <meta name='description' content={frontmatter.description} />
        <meta name='og:title' content={frontmatter.title} />
      </Head>
      <Layout>
      <div className='blog-post'>
        <article>
          <span className='blog-date'>{frontmatter.date}</span>
          <div className='tags'>
            {frontmatter.tags.map((tag) => (
              <span key={tag} className='tag'>{tag}</span>
            ))}
          </div>
          <ReactMarkdown className='markdown' components={MarkdownComponents} >
            {content}
          </ReactMarkdown>
        </article>
      </div>
      </Layout>
      </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('content/posts')
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }: any) {
  const markdownWithMetadata = fs
    .readFileSync(path.join('content/posts', slug + '.md'))
    .toString();
  const { data, content } = matter(markdownWithMetadata);
  const frontmatter = {
    ...data,
  }
  return {
    props: {
      content: `# ${data.title}\n${content}`,
      frontmatter,
    }
  }
}