import styles from './footer.module.scss';
import Contact_Form from './Contact_Form';
export default function Footer() {
    return (
      
      <footer className={styles.footer}>
        <div className={styles.footer__content}>
          <section className={styles.footer__social}>
          <form>
              <label>subscrile to our NL</label>
                <input>
                </input>
              
            </form>
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