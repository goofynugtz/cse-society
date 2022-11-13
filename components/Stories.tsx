import Image from 'next/image';

const Stories = () => {
  return (
    <div className="stories">
      <h1>Latest Stories</h1>
      <div className="story-card">
        <div className="marble marble-1">
          <Image alt='' src='/assets/DSC_4629.jpg' width={128} height={128}/>
        </div>
        <div className="marble marble-2">
          <Image alt='' src='/assets/DSC_4687.jpg' width={128} height={128}/>
        </div>
        <div className="marble marble-3">
          <Image alt='' src='/assets/DSC_4657.jpg' width={128} height={128} />
        </div>
      </div>
    </div>
  )
}

export default Stories