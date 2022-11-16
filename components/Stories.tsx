import Image from 'next/image';

const Stories = ({ stories }: any) => {
  console.log(stories)
  return (
    <div className="stories">
      <h1>Latest Stories</h1>
      <div className="story-cards">
        {stories.map((i: any) => {
          return (
            <div key={i.key} className="story-group">
              {i.value.slice(0, 3).map((j:any, index: any) => {
                return (
                  <div className={`marble marble-${index}`} >
                  <Image key={j} alt='' src={`/assets/${j}`} width={100} height={100}/>
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