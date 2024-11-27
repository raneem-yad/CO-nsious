import React from 'react'
import './AboutPage.css'

const AboutPage = () => {
  const profiles = [
    {
      name: 'Armando Urquiola',
      role: 'Hackathon Veteran',
      link1: 'https://www.linkedin.com/in/armandourquiola',
      link2: 'https://github.com/patchamama',
      image:
        'https://media.licdn.com/dms/image/v2/D4D03AQEQ7SDJQArgMg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706515714581?e=1738195200&v=beta&t=cybRTgCEBfHMYAEMBDRSKK0130vq_tyJPr5p5npLEyU'
    },
    {
      name: 'Raneem Yad',
      role: 'Hackathon Veteran',
      link1: 'https://www.linkedin.com/in/raneem-yad/',
      link2: 'https://github.com/raneem-yad',
      image:
        'https://media.licdn.com/dms/image/v2/D4E03AQGN8bCtqQkWSw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697805753701?e=1738195200&v=beta&t=ox4ln4PNcAIGbyPPczjKv8gm2sgOXlPMCUukTkTzeRQ'
    },
    {
      name: 'Katarina Kilian',
      role: 'Hackathon Enthusiast',
      link1: 'https://www.linkedin.com/in/katarina-kilian-645242313/',
      link2: 'https://github.com/kakilian',
      image: 'https://avatars.githubusercontent.com/u/160593671?v=4'
    },
    {
      name: 'Dajana Isbaner',
      role: 'Hackathon Newbie',
      link1: 'https://www.linkedin.com/in/dajana-isbaner/',
      link2: 'https://github.com/queenisabaer',
      image: 'https://avatars.githubusercontent.com/u/150792880?v=4'
    },
    {
      name: 'Jaime Hyland',
      role: 'Hackthon Newbie',
      link1: 'https://www.linkedin.com/in/language-landscapes/',
      link2: 'https://github.com/JaimeHyland',
      image:
        'https://media.licdn.com/dms/image/v2/C4E03AQH3TccAtgxp9w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517715624451?e=1738195200&v=beta&t=RcuRQdokfvnQyRqVxzqwr7FGrYhbCUQrhsxgmmkkaFc'
    },
    {
      name: 'Nicole Burmann',
      role: 'Hackathon Newbie',
      link1: 'https://www.linkedin.com/in/nicole-burmann-356aa61bb',
      link2: 'https://github.com/Nicole215',
      image:
        'https://media.licdn.com/dms/image/v2/D4E03AQEp15QMqfAz6w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699188357808?e=1738195200&v=beta&t=v-TCBS2mXvmtT19mXS2niPLaNNBZFrf2eEBIkDup2JM'
    }
  ]

  return (
    <div className='auth-wrapper'>
      <div className='auth-inner' style={{ width: '90%', marginTop: '400px' }}>
        <div className='about-page'>
          <main className='content'>
            <section>
              <h2>Green Stack Coders</h2>
              <div>
                <p>
                  We are a Team of Code Institute Students, come together to
                  rock a Hackathon by creating a cool app.
                </p>
              </div>
            </section>

            <section className='team'>
              <h2>Meet Our Team</h2>
              <div className='profile-list'>
                {profiles.map((profile, index) => (
                  <div key={index} className='profile-card'>
                    <img
                      src={profile?.image}
                      alt={`${profile.name}'s profile`}
                    />
                    <h4>{profile.name}</h4>
                    <p>{profile.role}</p>

                    <a href={profile.link1} target={'_blank'} rel='noreferrer'>
                      LinkedIn
                    </a>
                    <a href={profile.link2} target={'_blank'} rel='noreferrer'>
                      GitHub
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2>About this project</h2>
              <h5>Info about the Hackathon and the project itself</h5>
              <p>
                Hackathons are a fun way of testing and improving your coding
                skills.
              </p>
              <p>
                CO₂nscious is an app, Encouraging conscious, eco-friendly
                choices.
              </p>
              <p>
                Because every choice matters, it is your partner in making
                thoughtful, eco-conscious decisions at work. With personalized
                tips and practical tools, it's easier than ever to live
                sustainably and reduce your carbon footprint in the workplace.
              </p>
              <p>
                From small steps to big changes in your working lifestyle, our
                App can help guide your choices in your efforts to protect and
                improve you and your colleagues' health, your company's culture
                and ultimately the future of the planet. Start your journey with
                us here today!
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
