import React from 'react';
import Header from '../../components/header/Header';
import About from '../about/About';
import Contact from '../contact/Contact';
import ProjectPage from '../project/ProjectPage'
const Home = () => {
    return(
        <>
            <Header />
            <section className='section-about'>
                <About />
            </section>
            <ProjectPage />
            <Contact />
        </>
    )
}

export default Home;