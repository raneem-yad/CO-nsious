import React, { useContext } from 'react'
import logo from '../assets/_Logo_CO2nscious.webp'
import { hide } from '@popperjs/core'

const HomePage = () => {
  return (
    <div className='auth-wrapper'>
      <div className='auth-inner'>
        <h4>
          <img
            src={logo}
            alt='CO₂nscious Logo'
            className={'Logo'}
            style={{ heigh: '75px' }}
          />{' '}
          CO₂nscious is an app, Encouraging conscious, eco-friendly choices.
        </h4>
        <p>
          Because every choice matters, it is your partner in making thoughtful,
          eco-conscious decisions at work. With personalized tips and practical
          tools, it's easier than ever to live sustainably and reduce your
          carbon footprint in the workplace.
        </p>
        <p>
          From small steps to big changes in your working lifestyle, our App can
          help guide your choices in your efforts to protect and improve you and
          your colleagues' health, your company's culture and ultimately the
          future of the planet. Start your journey with us here today!
        </p>
      </div>
    </div>
  )
}

export default HomePage
