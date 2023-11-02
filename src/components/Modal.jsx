import React from 'react'
import styles from '../styles/modal.module.css'

const Modal = () => {
  return (
    <div className={styles.Modal}>
        <div className={styles.field}>
          <div className={styles.first}>
            <input className={styles.Name} type='text'/>
            <input className={styles.Email} type="email" />
          </div>
          <div className={styles.second}>
            <input className={styles.Title} type="text" />
          </div>
          <div className={styles.third}>
            <input className={styles.Text} type="text" />
          </div>
          <div className={styles.button}>
            <button className={styles.button}>Send</button>
          </div>
        </div>
    </div>
  )
}

export default Modal