import { Navigate, Route, Routes } from 'react-router-dom'
import { UserProvider } from './context/UserProvider'

import { Navbar } from './components/NavBar'
import LoginPage from './components/LoginPage'
import AboutPage from './components/AboutPage'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import SignUp from './components/SignUp'
import './App.css'
import LogOut from './components/LogOut'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Actions from './components/Actions'

function App() {
  return (
    <UserProvider>
      
      <div className='App'>
        <Navbar />
        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='login' element={<LoginPage />} />
              <Route path='signup' element={<SignUp />} />
              <Route path='logout' element={<LogOut />} />
              <Route path='about' element={<AboutPage />} />
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='profile' element={<Profile />} />
              <Route path='actions' element={<Actions />} />
              <Route path='*' element={<Navigate to='/about' />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </UserProvider>
  )
}

export default App
