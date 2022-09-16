import styles from './footer.module.scss';

export default function Footer() {
    return (
      
      <footer className={styles.footer}>
        <div className={styles.footer__content}>
          <section className={styles.footer__social}>
          s
          </section>
          <section className={styles.footer__contact}>
          c
          </section>
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