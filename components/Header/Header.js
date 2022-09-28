import styles from './header.module.scss';
import Navbar from "./Navbar/Navbar"
//import utilStyles from '../../styles/utils.module.scss';
export default function Header() {
    return (
      
       <section id='header' className={styles.header}>
        <Navbar />
        <h1 className={styles.header__title} > Kurku</h1>
        <p className={styles.header__p}>Body-tracking web MIDI controller powered by AI</p>
        <a className={styles.header__a} href="https://app.kurku.tech" target="_blank" >Try Kurku App!</a>
        <video className={styles.header__iframe} src="https://player.vimeo.com/external/544030006.hd.mp4?s=04cde03295c6b6cd31aede65f0c6d2ad0b3614ad&profile_id=175" autoPlay loop   controlsList='play' muted/>
        
       </section>
        
    )
  }