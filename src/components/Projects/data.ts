import { myTunes, myWallet, teslaUiClone, topTrumpsGame, GPT3 } from '../../assets';

interface ProjectsObjProperties {
  name: string
  description: string
  technologies: string[]
  repository: string
  deploy: string
  image: any
}

export const projects: Array<ProjectsObjProperties> = [
  {
    name: 'GPT3',
    description: 'A landing page of a GPT3 AI based on a Figma design.',
    technologies: ['React', 'JavaScript', 'CSS'],
    repository: 'https://github.com/giovanedann/gpt3-project',
    deploy: 'https://giovanedann.github.io/gpt3-project/',
    image: GPT3
  },
  {
    name: 'Top Trumps',
    description: 'Top Trumps game card creation, based on the norse mithology!',
    technologies: ['React', 'JavaScript', 'CSS'],
    repository: 'https://github.com/giovanedann/top-trumps',
    deploy: 'https://giovanedann.github.io/top-trumps/',
    image: topTrumpsGame
  },
  {
    name: 'My Tunes',
    description: 'Music player based on Spotify, you can add and remove favorited songs and edit your profile!',
    technologies: ['React Router', 'React', 'JavaScript', 'CSS'],
    repository: 'https://github.com/giovanedann/trybe-tunes',
    deploy: 'https://giovanedann.github.io/trybe-tunes/',
    image: myTunes
  },
  {
    name: 'My Wallet',
    description: 'Simulation of an online Wallet, with different currencies and categories.',
    technologies: ['Redux', 'React Router', 'React', 'JavaScript', 'CSS'],
    repository: 'https://github.com/giovanedann/wallet/',
    deploy: 'https://giovanedann.github.io/wallet/',
    image: myWallet
  },
  {
    name: 'Tesla UI Clone',
    description: 'Clone of the Tesla Website UI.',
    technologies: ['Hooks', 'Styled Components', 'Framer Motion', 'TypeScript'],
    repository: 'https://github.com/giovanedann/tesla-ui-clone',
    deploy: 'https://giovanedann.github.io/tesla-ui-clone/',
    image: teslaUiClone
  },
];
