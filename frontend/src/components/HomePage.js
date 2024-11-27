import React, {useContext} from 'react'
import { UserContext } from '../context/UserContext'

const HomePage = () => {
  const { user } = useContext(UserContext)
  return (
    <div>
      <h2>HomePage</h2>
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  )
}

export default HomePage
