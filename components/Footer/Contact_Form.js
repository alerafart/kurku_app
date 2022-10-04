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
    setEmailSent(true);
    setTimeout(()=>{
      setEmailSent(false);    
    }, 2000);
    setName('');
    setEmail('');
    setMessage('');
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
              required
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            /> 
            <label className={styles.footer__content__contact__form__label}htmlFor="email">Email:</label>
            <input
                className={styles.footer__content__contact__form__input}
                required
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.footer__content__contact__form__textAreaDiv}>
            <label className={styles.footer__content__contact__form__label} htmlFor="message">Message:</label>
            <textarea className={styles.footer__content__contact__form__textArea}
              required
              id="message"
              type="text"
              value={message}
              rows="6"
              onChange={e => setMessage(e.target.value)}
            />      
            <button className= {styles.footer__content__contact__form__button} type="submit">Send
            </button>                      
          </div>
          {emailSent &&
          <div className={styles.confirm__message}>
            <p className={styles.confirm__message__p}>Thank you for your message, we will be in touch in no time!
            </p>
          </div>
          }
      </form>
    </section>
  );
}