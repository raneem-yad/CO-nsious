import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Navigate } from 'react-router-dom'

const CheckPath = ({ needToBeLogged }) => {
  const { user, setUser } = useContext(UserContext)
  return (
    <>
      {needToBeLogged && !user.token && <Navigate to='/login' />}
      {!needToBeLogged && user.token && <Navigate to='/logout' />}
    </>
  )
}

export default CheckPath
