import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

import styles from './ContainerAnimes.module.css'
import Animes from '../API/TopAnimes';

type responseAPI = {
  data: Array<attributes>
}

type itens = {
  items: responseAPI;
}

type attributes = {
  attributes: datas;
  canonicalTitle: String;
  id: Number;
}

type datas = {
  canonicalTitle: String;
  episodeCount: any;
  posterImage: Images
}

type Images = {
  small: any;
}

const ContainerTopAnimes = () => {
  
  const [trendingAnimes, setTrendingAnime] = useState([]);

  console.log(trendingAnimes)
  useEffect(() => {
    
    const basicFetchAnimes = async () => {
      let list: any = await Animes.getList()
      setTrendingAnime(list)
    }

    basicFetchAnimes()
  }, [])

  const toTop = () => {
    window.scroll({
      top: 0,
    })
  }

  return(
    <div className={styles.dad}>
      <h1 className={styles.title}>Animes em alta</h1>
      {trendingAnimes.map((item: itens, key) => (
        <div className={styles.containerArcodeon} key={key}>
          {item.items.data.map((items: attributes, key: any) => (
            <Link onClick={toTop} className={styles.containerAnimeOrManga} key={key} to={`/Anime?q=${items.id}`}>
              <img src={items.attributes.posterImage.small}/>
              <p className={styles.CanonicalTitle}>{items.attributes.canonicalTitle}</p>
              {items.attributes.episodeCount === null ? (
                <p className={styles.episodesLengthNotContent}>Episodios não informados</p>
              ) : (
                <p className={styles.episodesLength}>{items.attributes.episodeCount} episodios</p>
              )}
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ContainerTopAnimes