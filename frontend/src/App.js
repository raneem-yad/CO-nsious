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
       <Navbar />

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
