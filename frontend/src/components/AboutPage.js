import React from 'react'


const AboutPage = () => {

  const profiles = [
    { name: 'Armando Urquiola Cabrera', role: 'Hackathon Veteran', link1: 'https://www.linkedin.com/in/armandourquiola', link2: 'https://github.com/patchamama'},
    { name: 'Raneem Yad', role: 'Hackathon Veteran', link1: 'https://www.linkedin.com/in/raneem-yad/', link2: 'https://github.com/raneem-yad'},
    { name: 'Katarina Kilian', role: 'Hackathon Enthusiast', link1: 'https://www.linkedin.com/in/katarina-kilian-645242313/', link2: 'https://github.com/kakilian'},
    { name: 'Dajana Isbaner', role: 'Hackathon Newbie', link1: 'https://www.linkedin.com/in/dajana-isbaner/', link2: 'https://github.com/queenisabaer'},
    { name: 'Jaime Hyland', role: 'Hackthon Newbie', link1: 'https://www.linkedin.com/in/language-landscapes/', link2: 'https://github.com/JaimeHyland'},
    { name: 'Nicole Burmann', role: 'Hackathon Newbie', link1: 'https://www.linkedin.com/in/nicole-burmann-356aa61bb', link2: 'https://github.com/Nicole215'},
  ];

  return (
    <div className='about-page'>
      <main className="content">
        <section>
          <h2>Green Stack Coders</h2>
          <div>
            <p>We are a Team of Code Institute Students, come together to rock a Hackathon by creating a cool app.</p>
          </div>
        </section>

        <section className="team">
          <h2>Meet Our Team</h2>
          <div className="profile-list">
            {profiles.map((profile, index) => (
              <div key={index} className="profile-card">
                <img src={profile.image} alt={`${profile.name}'s profile`} />
                <h4>{profile.name}</h4>
                <p>{profile.role}</p>
                <div className="links">
                  <a href={profile.link1}><i class="fa-brands fa-linkedin-in"></i> </a>
                  <a href={profile.link2}><i class="fa-brands fa-github"></i></a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>About this project</h2>
          <h5>Info about the Hackathon and the project itself</h5>
          <p>Hackathons are a fun way of testing and improving your coding skills.</p>
          <p>CO₂nscious is an app, Encouraging conscious, eco-friendly choices.</p>
          <p>Because every choice matters, it is your partner in making thoughtful, eco-conscious decisions at work. With personalized tips and practical tools, it's easier than ever to live sustainably and reduce your carbon footprint in the workplace.</p>
          <p>From small steps to big changes in your working lifestyle, our App can help guide your choices in your efforts to protect and improve you and your colleagues' health, your company's culture and ultimately the future of the planet. Start your journey with us here today!</p>
        </section>
      </main>
    </div>
           
  );
};

export default AboutPage
