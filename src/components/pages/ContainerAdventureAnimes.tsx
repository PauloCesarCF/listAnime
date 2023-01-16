import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'

import styles from './ContainerAnimes.module.css'
import AdventureAnime from '../API/AdventureAnime';

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
  episodeCount: number;
  posterImage: Images
}

type Images = {
  small: string;
}

const ContainerAdventureAnimes = () => {

  const [getAdventureAnime, setAdventureAnime] = useState([]);

  const carousel = useRef(null)

  useEffect(() => {

    const FetchAdventureAnime = async () => {
      let list: any = await AdventureAnime.getList()
      setAdventureAnime(list)
    }

    FetchAdventureAnime()
  }, [])

  const toTop = () => {
    window.scroll({
      top: 0,
    })
  }

  return (
    <div className={styles.dad}>
      <h1 className={styles.title}>Animes de aventura</h1>
      {getAdventureAnime.map((items: itens, key) => (
        <div className={styles.containerArcodeon} ref={carousel} key={key}>
          {items.items.data.map((items: attributes, key: any) => (
            <Link onClick={toTop} className={styles.containerAnimeOrManga} key={key} to={`/Anime?q=${items.id}`}>
              <img src={items.attributes.posterImage.small} />
              <p className={styles.CanonicalTitle}>{items.canonicalTitle}</p>
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

export default ContainerAdventureAnimes