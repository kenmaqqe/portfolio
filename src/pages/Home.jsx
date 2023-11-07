import React from 'react'
import {Hero} from '../components/hero/hero'
import { Quote } from '../components/quote/quote'
import { SectionProject } from '../components/sectionProjects/sectionProject'
import { SectionSkill } from '../components/sectionSkill/SectionSkill'
import { AboutMeSection } from '../components/aboutMe/AboutMeSection'
import { ContactSection } from '../components/ContactSection/ContactSection'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <Quote/>
      <SectionProject />
      <SectionSkill/>
      <AboutMeSection/>
      <ContactSection/>
    </div>
  )
}
