import React from 'react'
import styles from './hero.module.css'
import  heroImg  from './heroImg.jpg'
import Modal from '../Modal'


const Hero = () => {

  return (
    <div className={styles.hero}>
        <div className={styles.text}>
            <h3>Kenmaqqe is a <span className={styles.purple}>front-end developer</span></h3>
            <p>He crafts responsive websites where technologies meet creativity</p>
            <button className={styles.button}>Contact me!!</button>
        </div>
        <div className={styles.photo}>
            <img src={heroImg} alt="hero img" />
            <div className={styles.alt}>
                <div className={styles.purpleSquare}></div><p>Currently working on Portfolio</p>
            </div>
        </div>
        <Modal />
    </div>
  )
}

export {Hero}