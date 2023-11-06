import React from 'react'
import styles from '../styles/project.module.css'

const ProjectTemplate = (props) => {
  return (
    <div className={styles.Box}>
      <div className={styles.img}>
        <img className={styles.projectImg} src={props.photo} alt="" />
      </div>
      <div className={styles.used}>
        <p className={styles.usedText}>{props.used}</p>
      </div>
      <div className={styles.about}>
        <div className={styles.AboutBox}>
          <h3>{props.aboutName}</h3>
          <p>{props.about}</p>
          <span className={styles.Button}><a href={props.link} className="" target='_blank'>Live ~~></a></span>
        </div>
      </div>
    </div>
  )
}

export {ProjectTemplate}