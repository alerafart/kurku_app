import styles from './footer.module.scss';
import Contact_Form from './Contact_Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footer__content}>
          <section
            className={styles.footer__content__social}>
            <form className={styles.footer__content__social__form}>
              <label className={styles.footer__content__social__form__label}>
                <p className={styles.footer__content__social__form__label__p}>Subscribe to our Newsletter
                </p>
                <FontAwesomeIcon className={styles.footer__content__social__network__img} icon="fa-regular fa-envelope" />
              </label>
              <input
              className={styles.footer__content__social__form__input}
                type='text'
                placeholder='enter email'>
              </input>
            </form>
            <div className={styles.footer__content__social__network}>
              <div>
                <p className={styles.footer__content__social__form__label__p}>Follow Us!
                </p>
                <a href='#' target='_blank'>
                  <FontAwesomeIcon className={styles.footer__content__social__network__img} icon="fa-brands fa-facebook" />
                </a>
                <a href='#' target='_blank'>
                  <FontAwesomeIcon className={styles.footer__content__social__network__img} icon="fa-brands fa-linkedin" />
                </a>
                <a href='#' target='_blank'>
                  <FontAwesomeIcon className={styles.footer__content__social__network__img} icon="fa-brands fa-instagram" />
                </a>
                <a href='#' target='_blank'>
                  <FontAwesomeIcon className={styles.footer__content__social__network__img} icon="fa-brands fa-twitter" />
                </a>
                <a href='#' target='_blank'>
                <FontAwesomeIcon className={styles.footer__content__social__network__img} icon="fa-brands fa-youtube" />
                </a>
              </div>
            </div>
          </section>
          <Contact_Form />
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