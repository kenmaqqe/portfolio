import React from 'react'
import styles from '..//styles/footer.module.css'
import {AiOutlineLinkedin, AiOutlineInstagram} from 'react-icons/ai'
import {FaTelegram} from 'react-icons/fa'

 const Footer = () => {
  return (
    <div className={styles.Footer}>
        <div className={styles.Left}>
            <div className={styles.logo}>
                <svg className={styles.logoImg} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.501 6.028V6h-.02A10.28 10.28 0 0 0 4.519 6H4.5v.028a10.262 10.262 0 0 0 0 12.944V19h.02a10.28 10.28 0 0 0 15.962 0h.021v-.028a10.262 10.262 0 0 0 0-12.944zM13 6V3.272A4.533 4.533 0 0 1 15.54 6zm2.935 1a16.827 16.827 0 0 1 .853 5H13V7zM12 3.272V6H9.46A4.533 4.533 0 0 1 12 3.272zM12 7v5H8.212a16.827 16.827 0 0 1 .853-5zm-4.787 5H3.226a9.234 9.234 0 0 1 1.792-5h2.984a17.952 17.952 0 0 0-.79 5zm0 1a17.952 17.952 0 0 0 .789 5H5.018a9.234 9.234 0 0 1-1.792-5zm1 0H12v5H9.065a16.827 16.827 0 0 1-.853-5zM12 19v2.728A4.533 4.533 0 0 1 9.46 19zm1 2.728V19h2.54A4.533 4.533 0 0 1 13 21.728zM13 18v-5h3.788a16.827 16.827 0 0 1-.853 5zm4.787-5h3.987a9.234 9.234 0 0 1-1.792 5h-2.984a17.952 17.952 0 0 0 .79-5zm0-1a17.952 17.952 0 0 0-.789-5h2.984a9.234 9.234 0 0 1 1.792 5zm1.352-6h-2.501a8.524 8.524 0 0 0-1.441-2.398A9.306 9.306 0 0 1 19.139 6zM9.803 3.602A8.524 8.524 0 0 0 8.363 6H5.86a9.306 9.306 0 0 1 3.942-2.398zM5.861 19h2.501a8.524 8.524 0 0 0 1.441 2.398A9.306 9.306 0 0 1 5.861 19zm9.336 2.398A8.524 8.524 0 0 0 16.637 19h2.502a9.306 9.306 0 0 1-3.942 2.398z"/><path fill="none" d="M0 0h24v24H0z"/>
                </svg>
                <h3>Kenmaqqe</h3>
                <p>dimetriytalibel@gmail.com</p>
            </div>
            <div className={styles.Text}>
                <h3>Kenmaqqe is a GOAT front-end developer</h3>
            </div>
        </div>
        <div className={styles.Right}>
            <h2>Media</h2>
            <div className={styles.Social}>
                <a href='https://www.linkedin.com/in/dmytro-tymoshenko-a27398284/' target='_blank'><AiOutlineLinkedin className={styles.img} size={30}/></a>
                <a href='https://www.instagram.com/kenmaqe/' target='_blank'><AiOutlineInstagram className={styles.img} size={30}/></a>
                <a href='https://t.me/kenmaqqe' target='_blank'><FaTelegram className={styles.img} size={30}/></a>
            </div>
        </div>
    </div>
  )
}

export {Footer}