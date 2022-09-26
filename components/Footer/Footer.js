import styles from './footer.module.scss';
import { useState } from 'react';
import Contact_Form from './Contact_Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faYoutube, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
  
  const [subscribe, setSubscribe] = useState('');
  
  const handleSubscribe = e => {
    e.preventDefault();
    const data = {
      subscribe,
    };
    console.log( data.subscribe + ' subscribed to NL');
  };

    return (
      <footer className={styles.footer}>
        <div className={styles.footer__content}>
          <section
            className={styles.footer__content__social}>
            <form className={styles.footer__content__social__form}
              onSubmit={handleSubscribe}
            >
              <label className={styles.footer__content__social__form__label}>Subscribe to our Newsletter
              </label>
              
              <input
              className={styles.footer__content__social__form__input}
                type='email'
                id='email'
                onChange={e =>setSubscribe(e.target.value)}
                placeholder='Enter Your Email Here'>
              </input>
              <button
                className={styles.footer__content__social__form__button}
                type='submit'
                
                >
                <FontAwesomeIcon
                className={styles.footer__content__social__form__button__icon}
                icon={faEnvelope} />
              </button>
            </form>
            <div className={styles.footer__content__social__network}>
                <p 
                >Follow Us!
                </p>
                <a href='#' target='_blank'>
                  <FontAwesomeIcon className={styles.footer__content__social__network__img} icon={faFacebook} />
                </a>
                <a href='#' target='_blank'>
                  <FontAwesomeIcon className={styles.footer__content__social__network__img} icon={faLinkedin} />
                </a>
                <a href='#' target='_blank'>
                  <FontAwesomeIcon className={styles.footer__content__social__network__img} icon={faInstagram} />
                </a>
                <a href='#' target='_blank'>
                  <FontAwesomeIcon className={styles.footer__content__social__network__img} icon={faTwitter} />
                </a>
                <a href='#' target='_blank'>
                <FontAwesomeIcon className={styles.footer__content__social__network__img} icon={faYoutube} />
                </a>
                <a href='#' target='_blank'>
                <FontAwesomeIcon className={styles.footer__content__social__network__img} icon={faGithub} />
                </a>
            </div>
          </section>
          <Contact_Form />
          
        </div>
        {/* <div className={styles.footer__mentions}>
          <a
            href="https://app.kurku.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/images/kurku_logo_2.jpeg" alt="Kurku logo" className="logo" />
          </a>
        </div> */}
      </footer>        
    )
  }