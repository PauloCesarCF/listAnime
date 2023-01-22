import styles from './ContentAnime.module.css';
import VideoYoutube from './VideoYoutube';

type attributes = {
  Image: string
  title: string
  description: string
  youtubeVideoId: string
}
 
const ContentAnime = (attributes: attributes) => {

  return(
    <div className={styles.ContainerAnime}>
      <div className={styles.Top}>
        <img src={attributes.Image} />
        <div className={styles.content}>
          <h1 className={styles.Title}>{attributes.title}</h1>
          <p className={styles.description}>Synopsi: {attributes.description}</p>
        </div>
      </div>

      <VideoYoutube youtubeVideoId={attributes.youtubeVideoId} />
    </div>
  )
}

export default ContentAnime