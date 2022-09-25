import styles from './header.module.scss';
import Navbar from "./Navbar/Navbar"
//import utilStyles from '../../styles/utils.module.scss';
export default function Header() {
    return (
      
       <section className={styles.header}>
        <Navbar />
        <h1 className={styles.header__title} > Kurku.App!</h1>
        <p className={styles.header__p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. ?</p>
        <a className={styles.header__a} href="https://app.kurku.tech" target="_blank" >Get me there!</a>
      
      <video className={styles.header__iframe} src="https://player.vimeo.com/external/544030006.hd.mp4?s=04cde03295c6b6cd31aede65f0c6d2ad0b3614ad&profile_id=175" autoPlay loop  controls controlsList='play' muted/>
        
       </section>
        
    )
  }