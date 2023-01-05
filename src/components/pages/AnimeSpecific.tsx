import styles from './Specific.module.css';

import {useSearchParams} from 'react-router-dom';

import {useState, useEffect} from 'react';

type Anime = {
  canonicalTitle: String
  description: String
  length: Number
}

type AnimeImage = {
  small: any
}

const AnimeSpecific = () => {
  
  //get Id for Anime or mangá
  const [searchParams] = useSearchParams();
  let query = searchParams.get("q")

  const [anime, setAnime] = useState<Anime>();
  const [AnimeImage, setAnimeImage] = useState<AnimeImage>();
  const [youtubeVideoId, setYoutubeVideoId] = useState("");

  const searchAnime = async (anime: any) => {
    const res = await fetch(anime);
    const json = await res.json();

    setAnime(json.data.attributes)
    setAnimeImage(json.data.attributes.posterImage)
    setYoutubeVideoId(json.data.attributes.youtubeVideoId)
  }

  useEffect(() => {

    const search = `https://kitsu.io/api/edge/anime/${query}`

    searchAnime(search);
  
  }, [query])

  return(
    <div className={styles.container}>
      {anime?.length === 0 ? (
        <div className={styles.containerLoading}>
          <div className={styles.loader}></div>
        </div>
      ) : (
      <div className={styles.ContainerAnime}>
        <div className={styles.Top}>
          <img src={AnimeImage?.small} />
          <div className={styles.content}>
            <h1 className={styles.Title}>{anime?.canonicalTitle}</h1>
            <p className={styles.description}>Synopsi: {anime?.description}</p>
          </div>
        </div>
        <div className={styles.video}>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtubeVideoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
        )
      }
      
      
    </div>
  )
}

export default AnimeSpecific