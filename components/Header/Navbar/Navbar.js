//import Head from 'next/head';
import styles from './navbar.module.scss';
export default function Navbar() {
    return (
      
       <section className={styles.header}>

        <div className={styles.header__logo}>logo</div>

        <nav className={styles.header__nav}>
            <a className={styles.header__nav__link}>link</a>
            <a className={styles.header__nav__link}>link</a>
            <a className={styles.header__nav__link}>link</a>
        </nav>

       </section> 
       
        
        
    )
  }