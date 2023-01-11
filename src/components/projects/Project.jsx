import React from 'react'
import Fade from 'react-reveal/Fade'
import './projects.scss'

const Project = (props) => {
  const { imgUrl, name, desc, stack, gitHubUrl, website } = props;
  return (
    <Fade bottom>
      <section className="section__projects-single-projects">
        <img src={imgUrl} alt="" />
        <div className="section__projects-contents">
          <h1 className ="switch__color">{name}</h1>
          
          <p className="desc">{desc}</p>
          <div className="section__projects-icon">
            <a href={gitHubUrl.url} target="_blank" rel="noopener noreferrer" className="switch__color">
              {gitHubUrl.icon}
            </a>
            <a href={website.url} target="_blank" rel="noopener noreferrer" className="switch__color">
              {website.icon}
            </a>
          </div>
          <div className="section__projects-stack">
            <h2>Built with:</h2>
            <span>{stack}</span>
          </div>
        </div>
      </section>
    </Fade>
  )
}

export default Project;