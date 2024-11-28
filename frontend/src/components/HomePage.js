import React, { useContext } from 'react'
import logo from '../assets/_Logo_CO2nscious.webp'
import { hide } from '@popperjs/core'

const HomePage = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h4>
          <img
            src={logo}
            alt="CO₂nscious Logo"
            className={"Logo"}
            style={{ heigh: "75px" }}
          />{" "}
          Welcome to CO₂nscious – Small Choices, Big Impact
        </h4>
        <p>
          CO₂nscious empowers you to make eco-friendly decisions that benefit
          you, your community, and the planet. Whether you're commuting
          sustainably, managing waste, or saving energy, every action you log
          brings us closer to a greener future.
        </p>
        <p>
          Earn badges, climb the leaderboard, and unlock rewards as you make a
          difference. Companies can track and support team efforts through our
          admin panel, ensuring sustainability goals are met collaboratively.
          Join the movement toward a conscious, eco-friendly lifestyle—because
          every choice matters. Start Your Journey Today!
        </p>
      </div>
    </div>
  );
};

export default HomePage
