import React from 'react'
import { Container, Row, Col, ProgressBar, Card } from 'react-bootstrap'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='auth-wrapper'>
      <div className='auth-inner' style={{ width: '80%' }}>
        <Container className='mt-5'>
          {/* Title Section */}
          <Row className='text-center'>
            <Col>
              <h2>Your Points this month: 15</h2>
              <p>Your points last month: 24</p>
            </Col>
          </Row>

          {/* Progress Bar Section
      <Row className="justify-content-center">
        <Col xs={10} sm={8} md={6}>
          <ProgressBar now={85} label="85%" className={style.CustomProgressBar} />
        </Col>
      </Row> */}

          {/* AI Tip Section */}
          <Row className='justify-content-center mt-4'>
            <Col xs={10} sm={8} md={6}>
              <Card className='text-center'>
                <Card.Body>
                  <Card.Title>AI Tip:</Card.Title>
                  <Card.Text>
                    Make small changes today for a big impact tomorrow!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Team Progress and Badges Section */}
          <Row className='text-center mt-5'>
            <Col>
              <p>Team progress: Ranked #2 this quarter</p>
              <p>Badges earned:</p>
              <div className='d-flex justify-content-center'>
                <img
                  src='/path/to/acorn-icon.png'
                  alt='Acorn Badge'
                  style={{ width: '40px', margin: '0 10px' }}
                />
                <img
                  src='/path/to/camel-icon.png'
                  alt='Camel Badge'
                  style={{ width: '40px', margin: '0 10px' }}
                />
                <img
                  src='/path/to/pixel-icon.png'
                  alt='Pixel Badge'
                  style={{ width: '40px', margin: '0 10px' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Dashboard

// Possible way to fetch data from api:

// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, ProgressBar, Card } from 'react-bootstrap';

// const Dashboard = () => {
//   // State to hold data fetched from the backend
//   const [dashboardData, setDashboardData] = useState({
//     monthlyCO2: 0,
//     goalCO2: 0,
//     teamProgress: '',
//     badges: [],
//     aiTip: ''
//   });

//   const [isLoading, setIsLoading] = useState(true);

//   // Fetch data from the backend
//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const response = await fetch('/api/user-stats'); // Replace with your API endpoint
//         if (!response.ok) {
//           throw new Error('Failed to fetch dashboard data');
//         }
//         const data = await response.json();
//         setDashboardData(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   const { monthlyCO2, goalCO2, teamProgress, badges, aiTip } = dashboardData;

//   return (
//     <Container className="mt-5">
//       {/* Title Section */}
//       <Row className="text-center">
//         <Col>
//           <h2>Your CO₂ this month: {monthlyCO2} kg</h2>
//           <p>Your goal: {goalCO2} kg</p>
//         </Col>
//       </Row>

//       {/* Progress Bar Section */}
//       <Row className="justify-content-center">
//         <Col xs={10} sm={8} md={6}>
//           <ProgressBar
//             now={(monthlyCO2 / goalCO2) * 100}
//             label={`${((monthlyCO2 / goalCO2) * 100).toFixed(0)}%`}
//             className = {style.CustomProgressBar}
//           />
//         </Col>
//       </Row>

//       {/* AI Tip Section */}
//       <Row className="justify-content-center mt-4">
//         <Col xs={10} sm={8} md={6}>
//           <Card className="text-center">
//             <Card.Body>
//               <Card.Title>AI Tip:</Card.Title>
//               <Card.Text>{aiTip}</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Team Progress and Badges Section */}
//       <Row className="text-center mt-5">
//         <Col>
//           <p>Team progress: {teamProgress}</p>
//           <p>Badges earned:</p>
//           <div className="d-flex justify-content-center">
//             {badges.map((badge, index) => (
//               <img
//                 key={index}
//                 src={`/path/to/badges/${badge}`} // Update with badge folder path
//                 alt={`Badge ${index + 1}`}
//                 style={{ width: '40px', margin: '0 10px' }}
//               />
//             ))}
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Dashboard;
