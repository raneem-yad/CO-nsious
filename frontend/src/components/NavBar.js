import { Link, useLocation } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react' 
import logo from '../assets/_Logo_CO2nscious.webp'
import './NavBar.css'


const NavBarNotLoggedIn = () => {
  const location = useLocation();
  
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
      <div className='container'>
        <Link className='navbar-brand' to={'/'}>
        <img src={logo} alt="CO₂nscious Logo" className={"Logo"} />
        <span className={"LogoText"}>C0₂nscious</span>
        </Link>
        {/* Toggler button for small screens */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        {/* Collapsible menu */}
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className={`nav-link ${
                  location.pathname === '/login' ? 'active-link' : ''
                }`} to={'/login'} >
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link className={`nav-link ${
                  location.pathname === '/signup' ? 'active-link' : ''
                }`} to={'/signup'}>
                Sign up
              </Link>
            </li>
            <li className='nav-item'>
              <Link className={`nav-link ${
                  location.pathname === '/about' ? 'active-link' : ''
                }`} to={'/about'}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

const NavBarLogged = () => {
  const location = useLocation();
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
      <div className='container'>
        <Link className='navbar-brand' to={'/dashboard'}>
        <img src={logo} alt="CO₂nscious Logo" className={"Logo"} />
          C0₂nscious
        </Link>
        {/* Toggler button for small screens */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        {/* Collapsible menu */}
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto'>
          <li className='nav-item'>
              <Link className={`nav-link ${
                  location.pathname === '/dashboard' ? 'active-link' : ''
                }`} to={'/dashboard'}>
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link className={`nav-link ${
                  location.pathname === '/actions' ? 'active-link' : ''
                }`} to={'/actions'}>
                Actions
              </Link>
            </li>
            <li className='nav-item'>
              <Link className={`nav-link ${
                  location.pathname === '/profile' ? 'active-link' : ''
                }`} to={'/profile'}>
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link className={`nav-link ${
                  location.pathname === '/about' ? 'active-link' : ''
                }`} to={'/about'}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className={`nav-link ${
                  location.pathname === '/logout' ? 'active-link' : ''
                }`} to={'/logout'}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export const Navbar = () => {
  const { user, setUser } = useContext(UserContext)
  return <>{user.token ? <NavBarLogged /> : <NavBarNotLoggedIn />}</>
}