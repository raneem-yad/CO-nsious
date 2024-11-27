import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import API, { temporaryLogin } from '../utils/api'
import { Navigate } from 'react-router-dom'
import { Alert } from 'react-bootstrap'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [message, setMessage] = useState('')
  const { user, setUser } = useContext(UserContext)

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      if (password1 !== password2) {
        setMessage('Passwords do not match.')
        return
      }
      await console.log('Toke before: ', localStorage.getItem('authToken'))
      await temporaryLogin()
      await console.log('Token: ', localStorage.getItem('authToken'))
      await API.post('/dj-rest-auth/registration/', {
        username,
        email,
        password1,
        password2
      })
      await localStorage.removeItem('authToken') // Clear token
      await console.log('Token after: ', localStorage.getItem('authToken'))
      await API.post('/login/', { username, email, password1 })
      setMessage('Registration successful! You can now log in.')
    } catch (err) {
      setMessage(
        'Failed to register. Please check your inputs and define a password with at least 8 characters.'
      )
    }
  }

  return (
    <>
      {user.token && <Navigate to='/dashboard' />}
      <div className='auth-wrapper'>
        <div className='auth-inner'>
          <form onSubmit={handleRegister}>
            <h3>Sign Up</h3>
            <div className='mb-3'>
              <label>Username</label>
              <input
                type='text'
                className='form-control'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autocomplete='username'
                placeholder='Username'
              />
            </div>
            <div className='mb-3'>
              <label>Email address</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='form-control'
                autocomplete='username'
                placeholder='Enter email'
              />
            </div>
            <div className='mb-3'>
              <label>Password</label>
              <input
                type='password'
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                required
                className='form-control'
                autocomplete='new-password'
                placeholder='Enter password'
              />
            </div>
            <div className='mb-3'>
              <label>Confirm Password</label>
              <input
                type='password'
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                required
                className='form-control'
                autocomplete='new-password'
                placeholder='Confirm Password'
              />
            </div>
            <div className='d-grid'>
              <button type='submit' className='btn btn-success'>
                Sign Up
              </button>
            </div>
            <p className='forgot-password text-right'>
              Already registered <a href='/login'>sign in?</a>
            </p>
            {message && (
              <Alert variant={'danger'} className='mt-3'>
                {message}
              </Alert>
            )}
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
