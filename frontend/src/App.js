import { Navigate, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/NavBar'
import Header from './components/Header'
import LoginPage from './components/LoginPage'
import AboutPage from './components/AboutPage'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import SignUp from './components/SignUp'

function App() {
  return (
    <>
      <h1>MainApp</h1>
      <hr />
      <Header />

      <div className='App'>
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
              </ul>
            </div>
          </div>
        </nav>

        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='login' element={<LoginPage />} />
              <Route path='signup' element={<SignUp />} />
              <Route path='about' element={<AboutPage />} />
              <Route path='*' element={<Navigate to='/about' />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
