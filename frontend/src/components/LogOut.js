import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { handleLogout } from '../utils/api'
import { Navigate } from 'react-router-dom'

const LogOut = () => {
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    handleLogout()
    setUser({
      token: null,
      name: '',
      email: ''
    })
  }, [])

  return (
    <div>
      <h2>Log Out</h2>
      <p>You have been logged out.</p>
      <Navigate to='/login' />
    </div>
  )
}

export default LogOut
