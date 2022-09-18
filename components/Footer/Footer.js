import styles from './footer.module.scss';
import Contact_Form from './Contact_Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Footer() {
    return (
      
      <footer className={styles.footer}>
        <div className={styles.footer__content}>
          <section
            className={styles.footer__content__social}>
            <form className={styles.footer__content__social__form}>
                <label className={styles.footer__content__social__form__label}>
                  <p className={styles.footer__content__social__network__p}>Subscribe to our Newsletter
                  </p>
                  <p><FontAwesomeIcon className={styles.footer__content__social__network__img} icon="fa-regular fa-envelope" /></p>
                </label>
                  <input
                  className={styles.footer__content__social__form__input}
                    type='text'
                    placeholder='enter email'>
                  </input>
              </form>
            <div
              className={styles.footer__content__social__network}>
              
              <div>
                <p className={styles.footer__content__social__network__p}>Follow Us!
                </p>
                <FontAwesomeIcon className={styles.footer__content__social__network__img} icon="fa-brands fa-facebook" />
                <FontAwesomeIcon className={styles.footer__content__social__network__img} icon="fa-brands fa-linkedin" />
                <FontAwesomeIcon className={styles.footer__content__social__network__img} icon="fa-brands fa-instagram" />
                <FontAwesomeIcon className={styles.footer__content__social__network__img} icon="fa-brands fa-twitter" />
                <FontAwesomeIcon className={styles.footer__content__social__network__img} icon="fa-brands fa-youtube" />
              </div>
            </div>
          </section>
          <Contact_Form />
          
          {/* <section className={styles.footer__contact}>
            <form action="/send-data-here" method="post">
              <label for="first">First name:</label>
              <input type="text" id="first" name="first" />
              <label for="last">Last name:</label>
              <input type="text" id="last" name="last" />
              <button type="submit">Send</button>
            </form>
          </section> */}
        </div>
        <div className={styles.footer__mentions}>
          <a
            href="https://app.kurku.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/images/kurku_logo.png" alt="Vercel" className="logo" />
          </a>
        </div>
    </footer>        
    )
  }