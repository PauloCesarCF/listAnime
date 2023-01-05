import {useNavigate, Link} from 'react-router-dom';
import styles from './Header.module.css'
import lupa from '../../../public/lupa.svg'
import logo from '../../../public/logo.svg'

import {useState} from 'react'

const Header = () => {

  const [active, setMode] = useState(false)

  const ToggleMode = () => {
    setMode(!active)
  }

  const [nameAnime, setNameAnime] = useState("")
  const navigate = useNavigate()

  function form(e: any){
    e.preventDefault()

    if(!nameAnime) return;

    navigate(`/SearchAnime?q=${nameAnime}`)
    setNameAnime("")
  }

  function formMobile(e: any){
    e.preventDefault();
    setMode(!active)

    if(!nameAnime) return;

    navigate(`/SearchAnime?q=${nameAnime}`)
    setNameAnime("")
  }

  return(
    <div>
      <header className={styles.Header}>

        <Link to="">
          <img src={logo} alt="logo.svg" className={styles.logo}/>
        </Link>

        <form onSubmit={(e) => form(e)} className="form">
          <input
           type="text"
           onChange={(e) => setNameAnime(e.target.value)} 
           value={nameAnime}
           placeholder="Pesquisar anime"
           className={styles.searchAnime}
          />
          <button type="submit"><img src={lupa} alt="search button" className={styles.button_search}/></button>
        </form>
        
        <div className={active ? 'icon iconActive' : 'icon'} onClick={ToggleMode}>
          <div className={active ? 'lineOne' : 'line'}></div>
          <div className={active ? 'lineTwo' : 'line'}></div>
          <div className={active ? 'lineTre' : 'line'}></div>
        </div>
      </header>

      
      <div className={active ? 'menu menuOpen' : "menu menuClose"}>
        <div className={styles.menuMobile}>
        <form onSubmit={(e) => formMobile(e)} className={styles.areaSearch}>
            <input
             type="text"
             onChange={(e) => setNameAnime(e.target.value)} 
             value={nameAnime}
             placeholder="Pesquisar anime"
             className={styles.searchAnimeMobile}
            />

            <button type="submit"><img src={lupa} alt="search button" className={styles.buttonSearchMobile}/></button>
          </form>

        </div>
        </div>
    </div>
  )
}

export default Header