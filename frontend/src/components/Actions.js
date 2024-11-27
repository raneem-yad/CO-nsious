import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import API from '../utils/api'
import './Actions.css'

const getMeasures = async () => {
  try {
    const response = await API.get('/measures/', {})
    console.log(response.data)
    return response.data
  } catch (err) {
    // setError('Login failed. Check your credentials.')
    console.error('Failed to fetch measures:', err)
  }
}

const Actions = () => {
  const [action, setAction] = useState('')

  useEffect(() => {
    const fetchMeasures = async () => {
      console.log('Action:', action)
      const measures = await getMeasures()
      console.log('Measures:', measures)
    }
    fetchMeasures()
  }, [action])

  const cards = [
    {
      title: 'Transport',
      image:
        'https://competition-policy.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2024-08/Transport%20Image%20Adobe%20Stock%20604419486.jpeg?itok=f_K2qQZA',
      text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      onClick: () => alert('Transport')
    },
    {
      title: 'Waste',
      image:
        'https://img.nmcdn.io/e1/w:1800,h:1600,v:1/cpm/wp-content/uploads/2024/05/The-Moral-Imperative-of-Responsible-Waste-Managements.png?s=7f77bc31',
      text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      onClick: () => alert('Waste')
    },
    {
      title: 'Energy',
      image:
        'https://arayara.org/wp-content/uploads/2023/08/DreamShaper_v7_renewable_energy_industry_making_big_money_0-1.jpg',
      text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      onClick: () => alert('Energy')
    }
  ]

  const transportTypes = [
    {
      title: 'Public Transport',
      image:
        'https://www.irishtimes.com/polopoly_fs/1.4505336.1614319141!/image/image.jpg_gen/derivatives/landscape_620/image.jpg',
      text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      onClick: () => alert('Public Transport')
    },
    {
      title: 'Cycling',
      image:
        'https://www.bikecitizens.net/wp-content/uploads/2024/03/2024-03-07-14_07_20-Window.png',
      text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      onClick: () => alert('Cycling')
    },
    {
      title: 'Walking',
      image:
        'https://www.irishtimes.com/polopoly_fs/1.4505336.1614319141!/image/image.jpg_gen/derivatives/landscape_620/image.jpg',
      text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      onClick: () => alert('Walking')
    }
  ]

  const handleAction = (action) => {
    switch (action) {
      case 'Transport':
        return transportTypes
      case 'Waste':
        return []
      case 'Energy':
        return []
      default:
        return []
    }
  }

  return (
    <>
      <div className='auth-wrapper'>
        <div className='auth-inner' style={{ width: '100%' }}>
          <div className='card-grid'>
            {cards.map((card, index) => (
              <Card
                key={index}
                style={{ cursor: 'pointer' }}
                onClick={() => setAction(card.title)}
              >
                <div className='card-image-wrapper'>
                  <Card.Img
                    variant='top'
                    src={card.image}
                    alt={card.title}
                    className='card-image'
                  />
                </div>
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>

          {action && (
            <div style={{ textAlign: 'center' }}>
              <Dropdown style={{ textAlign: 'center' }}>
                <Dropdown.Toggle variant='success' id='dropdown-basic'>
                  {action}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {handleAction(action).map((card, index) => (
                    <Dropdown.Item key={index} onClick={card.onClick}>
                      {card.title}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <br />
              <Button variant='success'>Log action</Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Actions
