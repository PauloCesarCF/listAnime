import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Header from './components/layout/Header';
import SearchAnime from './components/pages/SearchAnime';
import Home from './components/pages/Home';
import PageAnimes from './components/pages/PageAnimes';
import AnimeSpecific from './components/pages/AnimeSpecific';
import Footer from './components/layout/Footer';

function App(){
  return(
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Animes" element={<PageAnimes />}/>
          <Route path="/searchAnime" element={<SearchAnime />}/>
          <Route path="/Anime" element={<AnimeSpecific />}/>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App;