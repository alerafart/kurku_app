import { useState } from 'react';
import styles from './footer.module.scss';
// import handler from '../../pages/api/form';
export default function Contact_Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
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
            
        </p>
        <form 
          action="/api/form"
          method="post"
          onSubmit={handleSubmit} 
          className={styles.footer__content__contact__form}>
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
            <label className={styles.footer__content__contact__form__label} htmlFor="message">Message:</label>
            <textarea className={styles.footer__content__contact__form__input}
                id="message"
                type="text"
                rows="4"
                onChange={e => setMessage(e.target.value)}
            />
            <button className= {styles.footer__content__contact__form__button} type="submit">Send</button>
            </form>

{/* <form action="/api/form" method="post">
  <label for="name">name name:</label>
  <input type="text" id="name" name="name" />
  <label for="email">email name:</label>
  <input type="text" id="email" name="email" />
  <label for="message">message name:</label>
  <input type="text" id="message" name="message" />
  <button type="submit">Submit</button>
</form> */}

      </section>
    
  );
}