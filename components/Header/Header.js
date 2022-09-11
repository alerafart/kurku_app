import styles from './header.module.scss';
import Navbar from "./Navbar/Navbar"
// import utilStyles from '../../styles/utils.modules.scss';
export default function Header() {
    return (
      
       <section>Header component
        <Navbar/>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Kurku.tech!</a>
        </h1>
        <div className='grid'>
          {/* <iframe width="356" height="200" src='http://www.youtube.com/watch?v=-n-B0IKmSvQ' frameborder="0" allowfullscreen>
            Midi Controller
          </iframe> */}
          <iframe src="https://player.vimeo.com/video/332293586?h=9792aea725&color=ffffff&badge=0" width="640" height="272" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          <p>
            <a href="https://vimeo.com/332293586">SOUL FLYERS : THE FIRST SECOND</a> from <a href="https://vimeo.com/maximemoulin">MAXIME MOULIN</a> on <a href="https://vimeo.com">Vimeo
            </a>.
          </p>
        </div>
       </section>
       
        
        
    )
  }