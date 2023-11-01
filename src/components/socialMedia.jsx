import React from 'react'
import {AiOutlineLinkedin, AiOutlineInstagram} from 'react-icons/ai'
import {FaTelegram} from 'react-icons/fa'
import styles  from '../styles/social.module.css'

const SocialMedia = () => {
  return (
    <div className={styles.social}>
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="191" viewBox="0 0 2 191" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.499995 191L0.500004 0L1.5 4.37114e-08L1.5 191L0.499995 191Z" fill="#ABB2BF"/>
        </svg>
        <a href='https://www.linkedin.com/in/dmytro-tymoshenko-a27398284/' target='_blank'><AiOutlineLinkedin className={styles.img} size={30}/></a>
        <a href='https://www.instagram.com/kenmaqe/' target='_blank'><AiOutlineInstagram className={styles.img} size={30}/></a>
        <a href='https://t.me/kenmaqqe' target='_blank'><FaTelegram className={styles.img} size={30}/></a>
    </div>
  )
}

export {SocialMedia}