import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'
import API from '../utils/api'
import CheckPath from './utils/CheckPath'
import './Actions.css'

const Actions = () => {
  const [action, setAction] = useState('')
  const [categories, setCategories] = useState([])
  const [measures, setMeasures] = useState([])
  const [activeMeasures, setActiveMeasures] = useState([])
  const [activeAction, setActiveAction] = useState(null)
  const [activeMeasure, setActiveMeasure] = useState(0)

  let totalMeasures = []

  useEffect(() => {
    const fetchcategories = async () => {
      console.log('Action:', action)
      const categoriesResp = await API.get('/category/', {})
      setCategories(categoriesResp.data.results)
      console.log('categories:', categoriesResp)

      //TODO: fetch all measures in a while loop

      let resp = []
      resp = await API.get('/measures/?page=1', {})
      console.log('resp1:', resp.data.results)
      totalMeasures = [...totalMeasures, ...resp.data.results]
      resp = await API.get('/measures/?page=2', {})
      console.log('resp2:', resp.data.results)
      totalMeasures = [...totalMeasures, ...resp.data.results]
      totalMeasures = [...new Set(totalMeasures)]

      setMeasures(totalMeasures)
      console.log('measures:', totalMeasures)
    }
    fetchcategories()
  }, [activeAction])

  const uniqueCards = activeMeasures.filter(
    (card, index, self) => index === self.findIndex((t) => t.name === card.name)
  )

  const setActualAction = (action) => {
    setActiveAction(action.id)
    setActiveMeasure(action.points)
    console.log('Active action:', action.name, action.points, action.id)
  }
  const setActionValues = (actionStr, actionId) => {
    setActiveAction(null)
    setAction(actionStr)
    setActiveMeasures(
      measures.filter((measure) => measure.category === actionId)
    )
    console.log('Active measures:', actionStr, actionId)
  }

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
        'https://sustainability.atmeta.com/wp-content/uploads/2024/08/GettyImages-539998802.jpg',
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
      <CheckPath needToBeLogged={true} />
      <div className='auth-wrapper'>
        <div className='auth-inner' style={{ width: '100%' }}>
          <div className='card-grid'>
            {categories.map((card, index) => (
              <Card
                key={index}
                style={{ cursor: 'pointer' }}
                onClick={() => setActionValues(card.name, card.id)}
              >
                <div className='card-image-wrapper'>
                  <Card.Img
                    variant='top'
                    src={cards[index].image}
                    alt={card.name}
                    className='card-image'
                  />
                </div>
                <Card.Body>
                  <Card.Title>{card.name}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>

          {action && (
            <div style={{ textAlign: 'center' }}>
              <h3>{action}</h3>
              <ListGroup as='ol' numbered>
                <div>
                  {uniqueCards.map((card, index) => (
                    <ListGroup.Item
                      as='li'
                      className='d-flex justify-content-between align-items-start'
                      onClick={() => setActualAction(card)}
                      style={{
                        backgroundColor:
                          card.id === activeAction ? 'lightgrey' : 'white'
                      }}
                      key={card.id} // Es importante agregar una key única cuando renderizas listas en React
                    >
                      <div className='ms-2 me-auto'>
                        <div className='fw-bold'>{card.name}</div>
                      </div>
                      <Badge bg='primary' pill>
                        {card.points}
                      </Badge>
                    </ListGroup.Item>
                  ))}
                </div>
              </ListGroup>
              <br />
              <Button onClick={() => activeAction && alert("Log saved!")} variant='success'>Log action</Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Actions
