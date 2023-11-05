import React , {useState , useRef } from 'react'
import styles from './hero.module.css'
import  heroImg  from './heroImg.jpg'
import emailjs from '@emailjs/browser';
import validator from "validator";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(!modalOpen)
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setModalOpen(!modalOpen)

    emailjs.sendForm('service_6e1zzmc', 'template_15zarce', form.current, 'NwkI1tFhRel2fdfRp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const [validMessage, setValidMessage] = useState(false);
  const [message, setMessage] = useState("");
  const validateEmail = (e) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setMessage("Thank you");
      setValidMessage(true)
    } else {
      setMessage("Please, enter valid Email!");
      setValidMessage(false)
    }react
  };

  return (
  
    <div className={styles.hero}>
        <div className={styles.text}>
            <h3>Kenmaqqe is a <span className={styles.purple}>GOAT <br/>front-end developer</span></h3>
            <p>He crafts responsive websites where technologies meet creativity</p>
            <button className={styles.button} onClick={openModal}>Contact me!!</button>
        </div>
        <div className={styles.photo}>
            <img src={heroImg} alt="hero img" />
            <div className={styles.alt}>
                <div className={styles.purpleSquare}></div><p>Currently working on Portfolio</p>
            </div>
        </div>
        {modalOpen && (<div className={styles.Modal}>
          <div className={styles.backdrop} onClick={openModal}></div>
          <div className={styles.ModalWindow}>
          <button className={styles.buttonClose} onClick={openModal}>Close</button>
          <form className={styles.Form} ref={form} onSubmit={sendEmail}>
          <div className={styles.People}>
            <label>Name</label>
            <input type="text" name="to_name" />
            <label>Email</label>
            <input type="email" name="from_name" onChange={(e) => validateEmail(e)} />
            <br />
            <span style={{color: validMessage? 'green' : "red" }}>
            {message}
            </span>
          </div>
          <div className={styles.Messages}>
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </div>
          </form></div>
        </div>)}
    </div>
  )
}

export {Hero}