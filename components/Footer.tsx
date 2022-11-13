import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="footer">
        <div className="group left">
          <div className="brand-name">
            <div>National Institute of Technology, Durgapur</div>
            <div><strong>Department of Computer Science</strong></div>
            <br/>
            <div>
              Mahatma Gandhi Avenue,
              <br/>
              A-Zone, Durgapur, West Bengal, 713209
            </div>
          </div>
        </div>
        <div className="group right">
          <Link href='/'>
            <div className="home button">Back To Home</div>
          </Link>
          <Link href='/vision'>
            <div className="vision button">Vision</div>
          </Link>
          <Link href='/members'>
            <div className="members button">Members</div>
          </Link>
          <Link href='/events'>
            <div className="events button">Events</div>
          </Link>
          <Link href='/blogs'>
            <div className="blogs button">Blogs</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer