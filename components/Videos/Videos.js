import styles from './videos.module.scss';

export default function Videos() {
    return (
      <section className={styles.videos}>Videos Component
        
        <div className="grid">
          
          <a href="https://nextjs.org/docs" className="card">
            <h3>Video Title &rarr;</h3>
            
            <iframe src="https://player.vimeo.com/video/332293586?h=9792aea725&color=ffffff&badge=0" width="320" height="136" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <p>Video description </p>
            <p>lorem50
              
            </p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </section>
               
    )
  }