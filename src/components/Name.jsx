import React from 'react'
import styles from '../styles/Name.module.css'

const Name = (props) => {
  return (
    <div className={styles.Name}>
        <h3><span>{props.firstSymbol}</span>{props.Name}</h3>
    </div>
  )
}

export {Name}