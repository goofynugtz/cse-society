import Logo from './assets/logo'
import { FiSun, FiMoon } from 'react-icons/fi';

interface DarkModeProps {
  mounted:any,
  setMounted:any,
  theme:any,
  setTheme:any,
  resolvedTheme:any
}

const Header = (darkModeProps: DarkModeProps) => {
  
  return (
    <div className="header">
      <div className="group left">
        <div className="brand-logo">
          <Logo />
        </div>
        <div className="brand-name">
          <div>National Institute of Technology, Durgapur</div>
          <div><strong>Department of Computer Science</strong></div>
        </div>
      </div>
      <div className="group right">
        <SunMoon {...darkModeProps}/>
      </div>
    </div>
  )
}

export default Header

const SunMoon = ({mounted, setMounted, theme, setTheme, resolvedTheme}: DarkModeProps) => {

  return (
    <div className='navlinks' onClick={() => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
      setMounted(theme === 'dark' ? false : true)
    }}
    >
      <div>{(mounted && (theme === 'dark')) ? <FiSun color={'#ffc107'} /> : <FiMoon />}</div>
    </div>
  );
};