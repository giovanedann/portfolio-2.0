import { myTunes, myWallet, teslaUiClone, MyContacts, NeonTrivia, CodeChef } from '../../assets';

interface ProjectsObjProperties {
  name: string
  description: string
  technologies: string[]
  repository: string
  deploy?: string
  image: any
}

export const projects: Array<ProjectsObjProperties> = [
  {
    name: 'Neon Trivia',
    description: 'Trivia game with Neon styles! Developed in group during Trybe course.',
    technologies: ['React', 'SASS', 'Redux', 'Testing Library', 'Class Components'],
    repository: 'https://github.com/giovanedann/trivia-game',
    deploy: 'https://carolinakauark.github.io/trivia-game/',
    image: NeonTrivia
  },
  {
    name: 'Code Chef',
    description: 'Recipes app, made following the Mobile First methodology!',
    technologies: ['React', 'Styled Components', 'Framer Motion', 'Testing Library'],
    repository: 'https://github.com/giovanedann/code-chef',
    deploy: 'https://code-chef-app.vercel.app/',
    image: CodeChef
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
  {
    name: 'My Contacts',
    description: 'FullStack application to manage contacts',
    technologies: ['Hooks', 'Styled Components', 'React', 'Node.js', 'Docker', 'PostgreSQL'],
    repository: 'https://github.com/giovanedann/my-contacts',
    image: MyContacts
  },
];
