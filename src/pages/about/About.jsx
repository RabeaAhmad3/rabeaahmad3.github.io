import React from 'react';
import resume from '../../assets/RabeaAhmad.pdf';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';

// components
import Cards from '../../components/skillsCards/Cards';
import Blast from '../../components/BlastAnimation/Blast';
import './about.scss';

const About = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate')
  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <Reveal>
        <div className="fake-big">About</div>
      </Reveal>
      <div className="section-about-wrapper section__padding">
        <article className="section-about-description">
          <div>
            <h2 arial-aria-label="About and skills">
              <Blast
                letterClass={letterClass}
                arrayStr={[
                  'A',
                  'b',
                  'o',
                  'u',
                  't',
                  '',
                  '&',
                  '',
                  'S',
                  'k',
                  'i',
                  'l',
                  'l',
                  's',
                ]}
                indexLetter={15}
              />
            </h2>
            <Fade bottom>
              <p>
                I love building. 
              </p>
            </Fade>
            <Fade bottom>
              <p>
                Particularly, I am super passionate about open source work, and the power we have as engineers to collectively work together to change the world.
                My interests include full-stack development, system design, responsive UI/UX development, machine learning and AI, and
                web3.
              </p>
            </Fade>
            <Fade bottom>
              <p>
                Here's my resume below for more details.
              </p>
            </Fade>
            <Fade left>
              <a
                style={{ marginTop: '2rem' }}
                href={resume}
                download
                className="contact-button submit-button"
              >
                <div>
                  <span className="bg switch__bg"></span>
                  <span className="base switch__border-color"></span>
                  <span className="text">Download Resume</span>
                </div>
              </a>
            </Fade>
          </div>
        </article>
        {/* programming language cards */}
        <Cards/>
      </div>
    </>
  )
}

export default About;