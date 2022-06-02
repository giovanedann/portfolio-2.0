import React from "react"

import {
  SiGit,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiTestinglibrary,
  SiNodedotjs,
  SiExpress,
  SiJest,
  SiPython,
  SiSass,
} from 'react-icons/si'

interface SkillsObject {
  name: string
  svg: React.ReactNode
  color: string
}

export const skills: Array<SkillsObject> = [
  { name: 'Git', svg: <SiGit className="skill-icon"/>, color: '#E84E31' },
  { name: 'HTML', svg: <SiHtml5 className="skill-icon"/>, color: '#DD4B25' },
  { name: 'CSS', svg: <SiCss3 className="skill-icon"/>, color: '#52A1DE' },
  { name: 'JavaScript', svg: <SiJavascript className="skill-icon"/>, color: '#EFD81D' },
  { name: 'TypeScript', svg: <SiTypescript className="skill-icon"/>, color: '#2F74C0' },
  { name: 'React', svg: <SiReact className="skill-icon"/>, color: '#5ED3F3' },
  { name: 'Redux', svg: <SiRedux className="skill-icon"/>, color: '#764ABC' },
  { name: 'Styled Components', svg: <SiStyledcomponents className="skill-icon"/>, color: '#E9BDEA' },
  { name: 'SASS', svg: <SiSass className="skill-icon"/>, color: '#CF649A' },
  { name: 'RTL', svg: <SiTestinglibrary className="skill-icon"/>, color: '#DC1B25' },
  { name: 'NodeJS', svg: <SiNodedotjs className="skill-icon"/>, color: '#89BB3C' },
  { name: 'ExpressJS', svg: <SiExpress className="skill-icon"/>, color: '#7B7B7B' },
  { name: 'Jest', svg: <SiJest className="skill-icon"/>, color: '#7E3653' },
  { name: 'Python', svg: <SiPython className="skill-icon"/>, color: '#366996' },
]
