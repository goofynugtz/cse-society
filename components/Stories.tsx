import Image from 'next/image';

const Stories = ({ stories }: any) => {
  return (
    <div className="stories">
      <h1>Latest Stories</h1>
      <div className="story-cards">
        {stories.map((i: any) => {
          return (
            <div key={i.key} className="story-group">
              {i.value.slice(0, 3).map((j: any, index: any) => {
                return (
                  <div key={j} className={`marble marble-${index}`} >
                    <Image alt='' src={`/assets/${j}`} width={100} height={100} />
                  </div>
                )
              })
              }
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default Stories