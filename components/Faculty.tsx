import Image from 'next/image';

const Faculty = ({ details }: any) => {
  return (
    <div className="faculty">
      <div className="hero-title">
        Faculty
      </div>
      <div className="hero-content">
        {details.map((detail: any) => {
          return (
            <div key={detail.email} className='profile-card'>
              <div className='profile-image'>
                <Image quality={100} alt="" src={detail.picture} width={64} height={64} />
              </div>
              <div className='profile-detail'>
                <div className="name">{`${detail.name}`}</div>
                <div className="post">{`${detail.post}`}</div>
                <a href={`mailto:${detail.email}`}>
                  <div className="detail email">{`${detail.email}`}</div>
                </a>
                {/* <a href={`tel:${detail.phone}`}>
                  <div className="detail phone">{`${detail.phone}`}</div>
                </a> */}
                <div className="detail phone">{`${detail.phone}`}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Faculty