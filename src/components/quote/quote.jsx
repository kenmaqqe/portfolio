import React from 'react'
import styles from './quote.module.css'

const Quote = () => {
  return (
    <div className={styles.quoteBox}>
        <div className={styles.quote}>
            <h4>"<span className={styles.purple}>Power is not will, it is the phenomenon of physically making things happen.</span>"</h4>
        </div>
        <div className={styles.author}>
            <span className={styles.purpleAuthor}>- Uchiha Madara</span>
        </div>
    </div>
  )
}

export {Quote}