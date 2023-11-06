import React from 'react'
import {Hero} from '../components/hero/hero'
import { Quote } from '../components/quote/quote'
import { SectionProject } from '../components/sectionProjects/sectionProject'
import { SectionSkill } from '../components/sectionSkill/SectionSkill'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <Quote/>
      <SectionProject />
      <SectionSkill/>
    </div>
  )
}
