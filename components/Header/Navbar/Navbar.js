//import Head from 'next/head';
import styles from './navbar.module.scss';
export default function Navbar() {
    return (
      
       <section className={styles.header}>
            <img className={styles.header__logo} src="/images/kurku_logo.png" alt="Vercel" />

        <nav className={styles.header__nav}>
            <a href='#' className={styles.header__nav__link}>link</a>
            <a href='#' className={styles.header__nav__link}>link</a>
            <a href='#' className={styles.header__nav__link}>link</a>
        </nav>
       </section>
        
    )
  }