import React from 'react'
import styles from '../styles/skill.module.css'

const Skill = (props) => {
  return (
    <div className={styles.Box}>
        <div className={styles.Name}>
           <h3>{props.Name}</h3>
        </div>
        <div className={styles.About}>
            <p>{props.About}</p>
        </div>
    </div>
  )
}

export {Skill}