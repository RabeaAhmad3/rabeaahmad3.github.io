import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

// images from the asset folder in the image file
import {
  wordleClone,
  suduko,
  salawat,
  vaas,
  pitchit,
  subify,
  verifiedvoices,
  fleetman,
  web3,
  solana,
  NFT,
  meta,
} from '../../assets/images'

// projects' id, name, stacks, icon and url data
export const projects = [
  {
    id: 1,
    name: 'VaaS',
    desc:
      'A modular Kubernetes management service',
    stack: 'TypeScript, GKE, Kubernetes, Docker, OpenFaaS, React, MongoDB',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/oslabs-beta/VaaS',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://vaas.dev/',
    },
    imgUrl: vaas,
  },
  {
    id: 2,
    name: 'Verified Voices',
    desc: 'A Reddit like discussion thread app for verified LinkedIn users',
    stack: 'TypeScript, Next.js, GraphQL, Tailwind.css, SQL',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/TeamMEWTU/VerifiedVoices',
    },
    website: {
      icon: "",
      url: '',
    },
    imgUrl: verifiedvoices,
  },
  {
    id: 3,
    name: 'Subify.io',
    desc: 'A monthly subscription tracker',
    stack: 'React JS, PostgreSQL, JavaScript, HTML, CSS',
    imgUrl: subify,

    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/ctri-12-Sea-Spiders/Subify',
    },
    website: {
      icon: "",
      url: '',
    },
  },
  {
    id: 4,
    name: 'PitchIt',
    desc: 'A remote team builder app for Software Engineers',
    stack: 'React, Node, Express, PostgreSQL, HTML, SCSS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/CTRI-12-Scratch-Project/PitchIt',
    },
    website: {
      icon: "",
      url: '',
    },
    imgUrl: pitchit, 
  },
  {
    id: 5,
    name: 'Truck Delivery Tracker',
    desc:
      'A microservice app that tracks a company’s fleet of trucks in real time',
    stack: 'Kubernetes, AWS, Java, Angular, Jenkins, Docker, ELK Stack, Prometheus',
    gitHubUrl: {
      icon: "",
      url: '',
    },
    website: {
      icon: "",
      url: '',
    },
    imgUrl: fleetman,
  },
  {
    id: 6,
    name: 'Salawat',
    desc: 'An IOS app that helps Muslims keep track of their daily prayers',
    stack: 'SwiftUI, Go, AWS',
    gitHubUrl: {
      icon: "",
      url: '',
    },
    website: {
      icon: "",
      url: '',
    },
    imgUrl: salawat
  },
  {
    id: 7,
    name: 'Meta Messenger Clone',
    desc:
      'A real time Meta messenger clone that allows users to sign in via Facebook',
    stack: 'Nextjs, TypeScript, Tailwind CSS, Redis, NextAuth',
    gitHubUrl: {
      icon: "",
      url: '',
    },
    website: {
      icon: "",
      url: '',
    },
    imgUrl: meta,
  },
  {
    id: 8,
    name: 'NFT Drop Dapp',
    desc: 'An NFT drop dapp that allows users to mint custom NFTs with ethereum',
    stack: 'Nextjs, TypeScript, Tailwind CSS, Thirdweb, Sanity',
    gitHubUrl: {
      icon: "",
      url: '',
    },
    website: {
      icon: "",
      url: '',
    },
    imgUrl: NFT,
  },
  {
    id: 9,
    name: 'Web3 Messenger',
    desc:
      'A web3 messenger app that allows users to send and receive messages in real time',
    stack: 'Nextjs, Tailwind CSS, Moralis, Metamask, Vercel',
    gitHubUrl: {
      icon: "",
      url: '',
    },
    website: {
      icon: "",
      url: '',
    },
    imgUrl: web3,
  },
  {
    id: 10,
    name: 'NFT Gated Website',
    desc:
      'A website that only allows users to access the site if they own a specific Solana NFT',
    stack: 'Nextjs, Tailwind CSS, Thirdweb, Solana',
    gitHubUrl: {
      icon: "",
      url: '',
    },
    website: {
      icon: "",
      url: '',
    },
    imgUrl: solana,
  },
  {
    id: 11,
    name: 'Suduko Solver',
    desc: 'Solves suduko puzzles using a backtracking recursion algorithm with a GUI',
    stack: 'Python, Pygame',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/RabeaAhmad3/SudokoSolver',
    },
    website: {
      icon: "",
      url: '',
    },
    imgUrl: suduko, 
  },
  {
    id: 12,
    name: 'Wordle Clone',
    desc:
      'A game that gives you 5 attempts to guess the correct word of the day',
    stack: 'C++',
    gitHubUrl: {
      icon: "",
      url: '',
    },
    website: {
      icon: "",
      url: '',
    },
    imgUrl: wordleClone,
  },

]
