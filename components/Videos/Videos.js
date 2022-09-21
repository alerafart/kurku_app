import styles from './videos.module.scss';

export default function Videos({videolist}) {
    return (
      <>
        <h2 className={styles.videos__h2}>Want some demos?</h2>
        <section className={styles.videos}>
        
          {videolist.map(video =>
              <div className={styles.videos__item}
                key={video.id}
                style={{ padding: 20, borderBottom: '1px solid #ccc' }}
                >
                  <iframe className={styles.videos__item__vid}
                    src={video.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                  </iframe>
                  <h3 className={styles.videos__h3}>
                    {video.title}
                  </h3>
                  <p className={styles.videos__p}> 
                    {video.content}
                  </p>
              </div>
            )
          }

          {/* static version video div */}
          {/*<div className={styles.videos__item}>
              <iframe className={styles.videos__item__vid}
                // width="560" height="315"
                src="https://www.youtube.com/embed/ZdWFRYdj2Mk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
              </iframe>
              <h3 className={styles.videos__h3}>
                Lorem ipsum dolor sit amet.
              </h3>
              <p className={styles.videos__p}> 
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, rerum?
              </p>
            </div>*/}
        </section>
      </>
               
    )
  }

  