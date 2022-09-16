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
    // const body = data.body;
    // handler(data, body);
    
  };

  
  return (
    <div>
      <section className={styles.footer__contact}>
        <form 
          action="/api/form"
          method="post"
          onSubmit={handleSubmit} 
          className={styles.footer__contact__form}>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                onChange={e => setName(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
                id="email"
                type="email"
                onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                type="text"
                rows="4"
                onChange={e => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
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
    </div>
  );
}