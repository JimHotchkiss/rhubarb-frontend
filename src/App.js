import "./App.css"
import { Switch, Route } from "react-router-dom"
import LandingPage from "./containers/LandingPage/LandingPage"
import ShowMovie from "./containers/ShowMovie/ShowMovie"
import NavbarComponent from "./components/Navbar/NavbarComponent"

function App() {
  return (
    <div>
      <NavbarComponent />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/movies/:id/show' component={ShowMovie} />
      </Switch>
    </div>
  )
}

export default App
