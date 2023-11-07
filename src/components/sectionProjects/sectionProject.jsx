import React from 'react'
import styles from './sectionProject.module.css';
import { ProjectTemplate } from '../project';
import Project1 from "../sectionProjects/project1.jpg"
import Project2 from "../sectionProjects/project2.jpg"
import { Link } from 'react-router-dom';

const SectionProject = () => {
    const ScrollToTop = () =>{
        window.scrollTo({
            top: 0
          });
    }
  return (
    <div className={styles.section}>
        <div className={styles.line}>
            <div className={styles.firstElement}>
                <h3><span className={styles.purple}>#</span>projects</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="511" height="2" viewBox="0 0 511 2" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M511 1.5H0V0.5H511V1.5Z" fill="#C778DD"/>
                </svg>
            </div>
            <div>
                <Link onClick={ScrollToTop} to="/projects">
                <h4>View all ~~></h4>
                </Link>
            </div>
        </div>
        <div className={styles.Project}>
            <ProjectTemplate className={styles.project} photo={Project1} used="ReactJs SCSS API" aboutName="59 winter cars" about="landing page for collecting for the Armed Forces of Ukraine" link={"https://59-winter-cars.site/"}/>
            <ProjectTemplate className={styles.project} photo={Project2} used="ReactJs SCSS API react-icons" aboutName="Random Breaking Bad Quotes" about="simple project that aimed to learn how to use the API and change the state to a random quote every time you interact with a button." link={"https://randombreakingbadquotes.netlify.app/"}/>
        </div>
    </div>
  )
}

export {SectionProject}