import React from 'react'
import styles from './sectionSkill.module.css'
import Left from './left.png'
import { Skill } from '../skill'

const SectionSkill = () => {
  const softSkills = '1)Time management 2)Team working 3)Communication skills '+ '\n4)Memory and attention'
  return (
    <div className={styles.Box}>
        <div className={styles.line}>
            <div className={styles.firstElement}>
                <h3><span className={styles.purple}>#</span>skills</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="239" height="2" viewBox="0 0 239 2" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M239 1.5H0V0.5H239V1.5Z" fill="#C778DD"/>
                </svg>
            </div>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <img src={Left} alt="" />
          </div>
          <div className={styles.right}>
              <Skill Name="Language" About="English (b1) Ukrainian (Native) "/>
              <Skill Name="Hard Skills" About="HTML CSS SCSS Bootstrap ReactJs API JS TS Next.Js Tailwind"/>
              <Skill Name="Soft Skills" About={softSkills}/>
              <Skill Name="Tools" About="VsCode Figma Git Trello"/>
          </div>
        </div>
    </div>
  )
}

export {SectionSkill}