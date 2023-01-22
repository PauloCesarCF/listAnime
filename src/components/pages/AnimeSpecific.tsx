import styles from './Specific.module.css';
import {useSearchParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import ContentAnime from '../layout/ContentAnime';

type Anime = {
  canonicalTitle: string
  description: string
  length: any
}

type AnimeImage = {
  small: string
}

const AnimeSpecific = () => {
  
  //get Id for Anime or mangá
  const [searchParams] = useSearchParams();
  let query = searchParams.get("q");

  const [anime, setAnime] = useState<Anime>({canonicalTitle: '', description: '', length: '' });
  const [AnimeImage, setAnimeImage] = useState<AnimeImage>({small: ''});
  const [youtubeVideoId, setYoutubeVideoId] = useState("");

  const searchAnime = async (anime: string) => {
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
        <ContentAnime title={anime?.canonicalTitle} description={anime?.description} Image={AnimeImage?.small} youtubeVideoId={youtubeVideoId}/>
      </div>
        )
      }
      
      
    </div>
  )
}

export default AnimeSpecific