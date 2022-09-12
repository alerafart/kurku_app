import styles from './header.module.scss';
import Navbar from "./Navbar/Navbar"
//import utilStyles from '../../styles/utils.module.scss';
export default function Header() {
    return (
      
       <section className={styles.header}>
        <Navbar />
        <h1 className="title" >
        <a href="https://nextjs.org">Kurku.tech!</a>
      </h1>
      <video className={styles.header__iframe} src="https://player.vimeo.com/external/544030006.hd.mp4?s=04cde03295c6b6cd31aede65f0c6d2ad0b3614ad&profile_id=175" autoPlay loop />
        
       </section>
        
    )
  }