import React from 'react'
import { Name } from '../Name'
import { ProjectTemplate } from '../project'
import styles from './fullProject.module.css'
import Project1 from "../sectionProjects/project1.jpg"
import Project2 from "../sectionProjects/project2.jpg"
import Project3 from "../sectionProjects/project3.jpg"
import Project4 from "../sectionProjects/project4.jpg"

const FullProject = () => {
  return (
    <div>
        <Name firstSymbol="#" Name="full-project"/>
        <div className={styles.Projects}>
            <ProjectTemplate className={styles.project} photo={Project1} used="ReactJs SCSS API" aboutName="59 winter cars" about="landing page for collecting for the Armed Forces of Ukraine" link={"https://59-winter-cars.site/"}/>
        </div>
        <Name firstSymbol="#" Name="small project"/>
        <div className={styles.Projects}>
            <ProjectTemplate className={styles.project} photo={Project2} used="ReactJs SCSS API react-icons" aboutName="Random Breaking Bad Quotes" about="simple project that aimed to learn how to use the API and change the state to a random quote every time you interact with a button." link={"https://randombreakingbadquotes.netlify.app/"}/>
            <ProjectTemplate className={styles.project} photo={Project3} used="ReactJs MinFinApo CSS MUI" aboutName="Currency Converter" about="A simple project for converting from one currency to another.Users can select the currency to convert from the drop-down list. The amount is entered in the text field.The conversion is performed in real time, i.e. if one of the currencies changes during the conversion, the result also changes." link="https://converterex.netlify.app/"/>
            <ProjectTemplate className={styles.project} photo={Project4} used="ReactJs CSS" aboutName="Simple Calculator" about="A very simple and primitive calculator in ReactJs" link="https://650aa73e10630041aac85d25--fluffy-snickerdoodle-642d32.netlify.app/"/>
        </div>
    </div>
  )
}

export {FullProject}