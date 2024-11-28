import React, {useContext} from 'react'
import { UserContext } from '../context/UserContext'

const HomePage = () => {
  const { user } = useContext(UserContext)
  return (
    <div>
      <h2>Welcome to CO₂nscious – Small Choices, Big Impact</h2>
      <p>CO₂nscious empowers you to make eco-friendly decisions that benefit you, your community, and the planet. Whether you're commuting sustainably, managing waste, or saving energy, every action you log brings us closer to a greener future.

          🚲 Track Your Journey: Log bike rides, walking commutes, and public transport trips to reduce your carbon footprint.
          ♻️ Reduce Waste: Use our Recycling Buddy and AI-powered tips to cut down waste and recycle smarter.
          💡 Save Energy: Optimize energy usage with tailored suggestions and explore green energy solutions.

          Earn badges, climb the leaderboard, and unlock rewards as you make a difference. Companies can track and support team efforts through our admin panel, ensuring sustainability goals are met collaboratively.

          🌟 What have you done today to go green? Log your actions now and take the next step toward a sustainable future!</p>
          
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  )
}

export default HomePage
