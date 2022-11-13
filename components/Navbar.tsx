import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="nav-bg">
      <div className="nav">
        <Link href='/'>
          <div className="home button">Home</div>
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
  )
}

export default Navbar