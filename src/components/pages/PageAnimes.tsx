import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import styles from './Page.module.css';

type AnimesAPI = {
  length: Number
  map: any
}

type itens = {
  "attributes.posterImage.small": any
  'attributes.canonicalTitle': any
  id: Number
}

const PageAnimes = () => {

  const [AllAnimes, setAllAnimes] = useState<AnimesAPI>([])

  const fetchAllAnimes = async (url: any) => {
    const res = await fetch(url)
    const json = await res.json()

    setAllAnimes(json.data)
  }

  useEffect(() => {
    const url = 'https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0'

    fetchAllAnimes(url)
  }, []);

  return(
    <div className="container">
      <h1>Lista de animes</h1>
        {AllAnimes.length === 0 && 
          <div className={styles.containerLoading}>
            <div className={styles.loader}></div>
          </div>
        }
      <div className="containerAnimesAndMangas">
        {AllAnimes.length > 0 && AllAnimes.map((item: itens, key: undefined) => (
          <div key={key} className="containerAnimeOrManga">
            <img src={item['attributes.posterImage.small']} alt={item['attributes.canonicalTitle']} className="AnimeOrManga" />
            <p className="CanonicalTitle">{item['attributes.canonicalTitle']}</p>
            <Link className="more" to={`/Anime?q=${item.id}`}>Ver detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PageAnimes