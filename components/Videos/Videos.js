import styles from './videos.module.scss';

export default function Videos() {
    return (
      <>
      <h3 className={styles.videos__h2}>Want some demos?</h3>
      <section className={styles.videos}>

        <div className={styles.videos__item}>
          <iframe className={styles.videos__item__vid} width="560" height="315" src="https://www.youtube.com/embed/ZdWFRYdj2Mk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

          </iframe>
        </div>
        <div className={styles.videos__item}>
          <iframe className={styles.videos__item__vid}
            // width="640" height="272"
            src="https://www.youtube.com/embed/7AfqiVkhXPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
        </div>
        <div className={styles.videos__item}>
          <iframe className={styles.videos__item__vid} width="560" height="315" src="https://www.youtube.com/embed/-n-B0IKmSvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        {/* <div className="grid">
      
      <a  className="card">
        <h3>Video Title &rarr;</h3>
        
        <iframe width="320" height="136" src="https://www.youtube.com/embed/7AfqiVkhXPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
        
      </a>

      <a href="https://nextjs.org/learn" className="card">
        <h3>Learn &rarr;</h3>
        <iframe width="320" height="136" src="https://www.youtube.com/embed/7AfqiVkhXPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>

      <a
        href="https://github.com/vercel/next.js/tree/master/examples"
        className="card"
      >
        <h3>Examples &rarr;</h3>
        <iframe width="320" height="136" src="https://www.youtube.com/embed/7AfqiVkhXPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </a>

      <a
        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className="card"
      >
        <h3>Deploy &rarr;</h3>
        <iframe width="320" height="136" src="https://www.youtube.com/embed/7AfqiVkhXPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>
          Instantly deploy your Next.js site to a public URL with Vercel.
        </p>
      </a>
    </div> */}
      </section></>
               
    )
  }