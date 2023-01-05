import "../../App.css"
import ContainerTopAnimes from './ContainerTopAnimes'
import ContainerAdventureAnimes from './ContainerAdventureAnimes'
import ContainerComedyAnimes from './ContainerComedyAnimes'

function Home() {

  return (
    <div className="App">
      <ContainerTopAnimes />

      <ContainerAdventureAnimes />

      <ContainerComedyAnimes />
    </div>
  )
}

export default Home
