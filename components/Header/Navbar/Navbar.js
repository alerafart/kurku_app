//import Head from 'next/head';
import styles from './navbar.module.scss';
export default function Navbar() {
    return (
      
       <section className={styles.header}>
        {/* <div className={styles.header__logo}>logo</div> */}
        {/* <Image className={styles.header__logo} src={logo}></Image> */}
        {/* <img src="/vercel.svg" alt="Vercel" className="logo" /> */}
        <div className={styles.header__logo__wrapper}>
            <img className={styles.header__logo} src="/images/kurku_logo.png" alt="Vercel" />
        </div>

       
        <nav className={styles.header__nav}>
            <a href='#' className={styles.header__nav__link}>link</a>
            <a href='#' className={styles.header__nav__link}>link</a>
            <a href='#' className={styles.header__nav__link}>link</a>
        </nav>
       </section>
        
    )
  }