import fs from 'fs';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Story({ stories }: any) {
  const [index, setIndex] = useState(0);
  const goToSlide = (index: any) => {
    setIndex(index);
  };

  return (
    <div className="story-view">
      <div className='story-contain'>
        <Image alt="" src={`/assets/${stories[index]}`} fill style={{
          objectFit: 'contain',
          animation: 'fadeIn 1s',
        }} />
        <Image alt="" src={`/assets/${stories[index]}`} fill style={{
          objectFit: 'cover',
          filter: 'blur(120px)',
          zIndex: '-10'
        }} />
      </div>
      <div className="story-thumbnails">
        {stories.map((story: any, index: any) => (
          <button key={index} onClick={() => goToSlide(index)}>
            <Image alt="" src={`/assets/${story}`} width={50} height={50} style={{
              objectFit: 'cover',
              zIndex: '-10'
            }} />
          </button>
        ))}
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const path = `${process.cwd()}/content/stories`
  const paths = fs.readdirSync(path).map((s) => ({
    params: {
      slug: s // event-name/folder-name
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }: any) {
  const path = `${process.cwd()}/content/stories`
  const stories = fs.readdirSync(path + '/' + slug).map((image) => {
    return image
  })
  return { props: { stories } };
}