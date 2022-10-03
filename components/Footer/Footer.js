import styles from './footer.module.scss';
import { useState } from 'react';
import Contact_Form from './Contact_Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faYoutube, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
  
  const [subscribeEmailNl, setSubscribeEmailNl] = useState('');
  const [isEmailSubscribed, setIsEmailSubscribed] = useState(false);
  const [alertSubscribed, setAlertSubscribed] = useState(false);

  const handleSubscribe = e => {
    e.preventDefault();
    const data = {
      subscribeEmailNl,
    };
    console.log( data.subscribeEmailNl + ' subscribed to NL');
    setIsEmailSubscribed(true);  
    setAlertSubscribed(true);
    setTimeout(()=>{
      setAlertSubscribed(false);    
    }, 2000);
    setSubscribeEmailNl('');
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
                onChange={e =>setSubscribeEmailNl(e.target.value)}
                value={subscribeEmailNl}
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
              {alertSubscribed &&
              <div className={styles.confirm__nl}>
                  <p className={styles.confirm__nl__p}>Thanks for subscribing to our Newsletter, no Spam promise!
                  </p>
              </div>
            }
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
      </footer>        
    )
  }