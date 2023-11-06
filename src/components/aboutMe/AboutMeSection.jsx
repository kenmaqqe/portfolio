import React from 'react'
import styles from './aboutme.module.css'
import AboutMePhoto from './AboutMe.png'

const AboutMeSection = () => {
  return (
    <div className={styles.Box}>
        <div className={styles.SectionName}>
            <h3><span className={styles.purple}>#</span>about-me</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="326" height="2" viewBox="0 0 326 2" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M326 1.5H0V0.5H326V1.5Z" fill="#C778DD"/>
            </svg>
        </div>
        <div className={styles.Section}>
          <div className={styles.About}>
            <p>Hello, i’m Kenmaqqe!<br/><br/>
              I’m a <span className={styles.purple}>GOAT front-end developer</span> based in Zhytomyr, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.<br/><br/>
              I always strive to learn about the newest technologies and frameworks.</p>
              <span className={styles.Button}><a href="#">Read more -></a></span>
          </div>
          <div className={styles.Photo}>
            <img src={AboutMePhoto} alt="" />
          </div>
        </div>
    </div>
  )
}

export {AboutMeSection}