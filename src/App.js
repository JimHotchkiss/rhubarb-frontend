import "./App.css"
import { Switch, Route } from "react-router-dom"
import React, { useState } from "react"

import LandingPage from "./containers/LandingPage/LandingPage"
import ShowMovie from "./containers/ShowMovie/ShowMovie"
import NavbarComponent from "./components/Navbar/NavbarComponent"
import Footer from "./components/Footer/Footer"

function App() {
  const [showLogin, setShowlogin] = useState(false)

  const login = () => {
    return (
      <Route
        exact
        path='/'
        render={(props) => <LandingPage handleLogin={handleLogin} {...props} />}
      />
    )
  }

  const landingPage = () => {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={(props) => (
            <LandingPage handleLogin={handleLogin} {...props} />
          )}
        />
        <Route path='/movies/:id/show' component={ShowMovie} />
      </Switch>
    )
  }

  const handleLogin = (evnt) => {
    setShowlogin(true)
  }
  return (
    <div>
      <NavbarComponent />
      {console.log(showLogin)}
      <Switch>
        <Route
          exact
          path='/'
          render={(props) => (
            <LandingPage handleLogin={handleLogin} {...props} />
          )}
        />
        <Route path='/movies/:id/show' component={ShowMovie} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
