import { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: null,
    name: '',
    email: ''
  })
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
