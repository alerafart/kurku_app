import { useState } from 'react';
import styles from './footer.module.scss';
export default function Contact_Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    console.log(data);
  };
  
  return (
    
      <section className={styles.footer__content__contact}> 
        <p>
            Contact Me
        </p>
        <form 
          action="/api/form"
          method="post"
          onSubmit={handleSubmit} 
          className={styles.footer__content__contact__form}>
            <div className={styles.footer__content__contact__form__senderDiv}>
              <label className={styles.footer__content__contact__form__label} htmlFor="name">Name:</label>
              <input
                className={styles.footer__content__contact__form__input}
                  id="name"
                  type="text"
                  onChange={e => setName(e.target.value)}
              />
              
              <label className={styles.footer__content__contact__form__label}htmlFor="email">Email:</label>
              <input
                  className={styles.footer__content__contact__form__input}
                  id="email"
                  type="email"
                  onChange={e => setEmail(e.target.value)}
              />
            </div>
            
            <div className={styles.footer__content__contact__form__textAreaDiv}>
              <label className={styles.footer__content__contact__form__label} htmlFor="message">Message:</label>
              <textarea className={styles.footer__content__contact__form__textArea}
                  id="message"
                  type="text"
                  rows="6"
                  onChange={e => setMessage(e.target.value)}
              />
              <button className= {styles.footer__content__contact__form__button} type="submit">Send</button>

            {emailSent && <div >
                <alert id="alert" className="contact__message--confirm--alert"
                severity="success">
                  <span className="contact__message--confirm--alert--text">Thank you for your message, we will be in touch in no time!
                  </span>
                </alert>
              </div>
              }
                
            </div>
        </form>
      </section>
    
  );
}