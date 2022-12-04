import Image from 'next/image';
import Link from 'next/link';

const Stories = ({ stories }: any) => {
  return (
    
    <div className="stories">
      <Link href="/stories">
      <h1>Latest Stories</h1>
      </Link>
      <div className="story-cards">
        {stories.map((i: any) => {
          return (
            <Link key={i.name} href={`/stories/${i.name}`}>
            <div key={i.name} className="story">
              <div className="marble" >
                <Image alt='' src={`/assets/${i.thumbnail}`} fill />
              </div>
              <div className="label">{`${i.name}`}</div>
            </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Stories