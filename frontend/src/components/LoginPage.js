/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import API from '../utils/api'
import { Navigate } from 'react-router-dom'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { user, setUser } = useContext(UserContext)

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await API.post('/login/', { username, email, password })
      localStorage.setItem('authToken', response.data.key) // Save token
      setUser({ token: response.data.key, username, email })
      // alert('Login successful!')
    } catch (err) {
      localStorage.removeItem('authToken') // Clear token
      setUser({ token: null, username: '', email: '' })
      setError('Login failed. Check your credentials.')
    }
  }

  return (
    <>
      {/* {user.token && <Navigate to='/dashboard' />} */}
      <div className='auth-wrapper'>
        <div className='auth-inner'>
          <form onSubmit={handleLogin}>
            <h3>Sign In</h3>
            <div className='mb-3'>
              <label>Username</label>
              <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='form-control'
                autocomplete='username'
                placeholder='Enter username'
              />
              <label>Email address</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='form-control'
                autocomplete='username'
                placeholder='Enter email'
              />
            </div>
            <div className='mb-3'>
              <label>Password</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='form-control'
                autocomplete='current-password'
                placeholder='Enter password'
              />
            </div>
            <div className='mb-3'>
              <div className='custom-control custom-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customCheck1'
                />
                <label className='custom-control-label' htmlFor='customCheck1'>
                  Remember me
                </label>
              </div>
            </div>
            <div className='d-grid'>
              <button type='submit' className='btn btn-primary'>
                Login
              </button>
            </div>
            <p className='forgot-password text-right'>
              Forgot <a href='#'>password?</a>
            </p>
            {error && <p>{error}</p>}
            <pre>{JSON.stringify(user, null, 3)}</pre>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage
