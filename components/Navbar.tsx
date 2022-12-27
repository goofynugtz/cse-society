import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    // <div className="nav-bg">
      <div className="nav">
        <Link href='/'>
          <div className={router.pathname == "/" ? "home button active" : "home button"}>Home</div>
        </Link>
        <Link href='/vision'>
          <div className={router.pathname == "/vision" ? "vision button active" : "vision button"}>Vision</div>
        </Link>
        <Link href='/members'>
          <div className={router.pathname == "/members" ? "members button active": "members button"}>Members</div>
        </Link>
        <Link href='/events'>
          <div className={router.pathname == "/events" ? "events button active" : "events button"}>Events</div>
        </Link>
        <Link href='/blogs'>
          <div className={router.pathname == "/blogs/[slug]" || router.pathname == "/blogs" ? "blogs button active": "blogs button"}>Blogs</div>
        </Link>
      </div>
    // </div>
  )
}

export default Navbar