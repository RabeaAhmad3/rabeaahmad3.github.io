import React from 'react'

// react-icons
import { FiGrid, FiLinkedin} from 'react-icons/fi'
import { VscProject } from 'react-icons/vsc'
import {
  BsPersonLinesFill,
} from 'react-icons/bs'

import { RiContactsLine, RiReactjsLine } from 'react-icons/ri'
import {
  SiPython,
  SiJava,
  SiExpress,
  SiRedux,
  SiJest,
  SiTypescript,
  SiGo,
  SiAmazonaws,
  SiJunit5,
  SiPuppeteer,
  SiKubernetes,
  SiDocker,
  SiNextdotjs,
  SiCplusplus,
  SiJenkins,
  SiTravisci
  

} from 'react-icons/si'

import { GrGithub, GrTwitter, GrInstagram } from 'react-icons/gr'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiAws, DiCss3, DiMongodb, DiMysql, DiPostgresql } from 'react-icons/di'
import { IoLogoJavascript} from 'react-icons/io'
import { FaNodeJs, FaGit } from 'react-icons/fa'

// sidebar menu functionality
const sideBarMenu = [
  {
    text: 'Home',
    icon: <FiGrid className="link-icon" />,
    url: '/',
  },
  {
    text: 'About',
    icon: <BsPersonLinesFill className="link-icon" />,
    url: '/about',
  },
  {
    text: 'Projects',
    icon: <VscProject className="link-icon" />,
    url: '/project',
  },
  {
    text: 'Contact',
    icon: <RiContactsLine className="link-icon" />,
    url: '/contact',
  }
  
]
// social media icons
const socialIcons = [
  {
    icon: <GrGithub className="icon switch__color" />,
    url: 'https://github.com/RabeaAhmad3 ',
  },
  {
    icon: <GrTwitter className="icon switch__color" />,
    url: 'https://twitter.com/rabbydabs',
  },
  {
    icon: <GrInstagram className="icon switch__color" />,
    url: 'https://www.instagram.com/rabbydabs/',
  },
  {
    icon: <FiLinkedin className="icon switch__color" />,
    url: 'https://www.linkedin.com/in/rabea-ahmad/',
  },
]
// skills card
const skillSet = [
  {
    icon: <IoLogoJavascript className="skills-icon switch__color" />,
    spanText: 'JAVASCRIPT',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
  },
  {
    icon: <SiTypescript className="skills-icon switch__color" />,
    spanText: 'TYPESCRIPT',
    url: 'https://www.typescriptlang.org/',
  },
  {
    icon: <SiJava className="skills-icon switch__color" />,
    spanText: 'JAVA',
    url: 'https://docs.oracle.com/en/java/',
  },
  {
    icon: <SiCplusplus className="skills-icon switch__color" />,
    spanText: 'C++',
    url: 'https://docs.oracle.com/en/java/',
  },
  {
    icon: <SiPython className="skills-icon switch__color" />,
    spanText: 'PYTHON',
    url: 'https://docs.python.org/3/',
  },
  {
    icon: <SiGo className="skills-icon switch__color" />,
    spanText: 'GO',
    url: 'https://go.dev/',
  },
  {
    icon: <AiFillHtml5 className="skills-icon switch__color" />,
    spanText: 'HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    icon: <DiCss3 className="skills-icon switch__color" />,
    spanText: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    icon: <RiReactjsLine className="skills-icon switch__color" />,
    spanText: 'REACT JS',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started',
  },
  {
    icon: <SiRedux className="skills-icon switch__color" />,
    spanText: 'REDUX',
    url: 'https://redux.js.org/introduction/getting-started',
  },
  {
    icon: <SiNextdotjs className="skills-icon switch__color" />,
    spanText: 'NEXT JS',
    url:
      'https://nextjs.org/',
  },
  {
    icon: <FaNodeJs className="skills-icon switch__color" />,
    spanText: 'NODE',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs',
  },
  {
    icon: <SiExpress className="skills-icon switch__color" />,
    spanText: 'EXPRESS JS',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Express',
  },
  {
    icon: <DiMongodb className="skills-icon switch__color" />,
    spanText: 'MONGO DB',
    url: 'https://www.mongodb.com/home',
  },
  {
    icon: <DiMysql className="skills-icon switch__color" />,
    spanText: 'MYSQL',
    url: 'https://www.mysql.com/',
  },
  { icon: <DiPostgresql className="skills-icon switch__color" />,
  spanText: 'POSTGRESQL',
  url: 'https://www.postgresql.org/',
},
  {
    icon: <SiAmazonaws className="skills-icon switch__color" />,
    spanText: 'AWS',
    url: 'https://aws.amazon.com/',
  },
  {
    icon: <SiKubernetes className="skills-icon switch__color" />,
    spanText: 'KUBERNETES',
    url: 'https://kubernetes.io/',
  },
  {
    icon: <SiDocker className="skills-icon switch__color" />,
    spanText: 'DOCKER',
    url: 'https://www.docker.com/',
  },
  {
    icon: <SiJenkins className="skills-icon switch__color" />,
    spanText: 'JENKINS',
    url: 'https://www.jenkins.io/',
  },
  {
    icon: <SiTravisci className="skills-icon switch__color" />,
    spanText: 'TRAVIS CI',
    url: 'https://www.travis-ci.com/',
  },
  {
    icon: <SiJest className="skills-icon switch__color" />,
    spanText: 'JEST',
    url: 'https://jestjs.io/docs/getting-started',
  },
  {
    icon: <SiJunit5 className="skills-icon switch__color" />,
    spanText: 'JUNIT',
    url: 'https://junit.org/junit5/',
  },
  {
    icon: <SiPuppeteer className="skills-icon switch__color" />,
    spanText: 'PUPPETEER',
    url: 'https://pptr.dev/',
  },
  {
    icon: <FaGit className="skills-icon switch__color" />,
    spanText: 'GIT',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
  },


]

export { sideBarMenu, socialIcons, skillSet };
