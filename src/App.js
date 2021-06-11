import "./App.css"
import NavbarComponent from "./components/Navbar/NavbarComponent"
import Showcase from "./components/Showcase/Showcase"
import Newsletter from "./components/Newsletter/Newsletter"
import MovieCards from "./containers/MovieCards/MovieCards"

function App() {
  return (
    <div>
      <NavbarComponent />
      <Showcase />
      <Newsletter />
      <MovieCards />
    </div>
  )
}

export default App
