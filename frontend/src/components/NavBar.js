import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'

const NavBarNotLoggedIn = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
      <div className='container'>
        <Link className='navbar-brand' to={'/sign-in'}>
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
              <Link className='nav-link' to={'/login'}>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={'/signup'}>
                Sign up
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={'/dashboard'}>
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={'/actions'}>
                Actions
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={'/profile'}>
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={'/about'}>
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
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
      <div className='container'>
        <Link className='navbar-brand' to={'/sign-in'}>
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
              <Link className='nav-link' to={'/dashboard'}>
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={'/actions'}>
                Actions
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={'/profile'}>
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={'/about'}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={'/logout'}>
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
  return <>{user.token ? <NavBarNotLoggedIn /> : <NavBarNotLoggedIn />}</>
}
