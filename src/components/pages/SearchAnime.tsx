import {useNavigate, useSearchParams, Link} from 'react-router-dom'

import styles from './SearchAnime.module.css'

import {useState, useEffect} from 'react'

type iten = {
  id: any
  attributes: data
}

type data = {
  canonicalTitle: string;
  episodeCount: any;
  posterImage: Images
}

type Images = {
  small: any
}

const SearchAnime = () => {
  const [searchParams] = useSearchParams();

  let query = searchParams.get("q")

  let [anime, setAnime] = useState([]);
  let [Id, setId] = useState([]);

  console.log(anime)

  const searchAnime = async (url: any) => {
    const res = await fetch(url);
    const json = await res.json()

    setAnime(json.data)
  }

  useEffect(() => {

    const search = `https://kitsu.io/api/edge/anime?filter[text]=${query}`

    searchAnime(search);
  
  }, [query])

  const navigate = useNavigate()

  function AnimeDetalhe(e: any){
    e.preventDefault()

    navigate(`anime?q=${Id}`)
  }

  const toTop = () => {
    window.scroll({
      top: 0,
    })
  }
  
  return(
    <div className="container">
      <h1 className={styles.result}>Resultados relacionado a {query}</h1>
        {anime.length === 0 && 
          <div className={styles.containerLoading}>
            <div className={styles.loader}></div>
          </div>
        }
      <div className={styles.containerAnimesAndMangas}>
        {anime.length > 0 && anime.map((items: iten, key: any) => (
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
    </div>
  )
}

export default SearchAnime