import "./App.css"
import { Switch, Route } from "react-router-dom"
import React, { useState } from "react"

import LandingPage from "./containers/LandingPage/LandingPage"
import ShowMovie from "./containers/ShowMovie/ShowMovie"
import NavbarComponent from "./components/Navbar/NavbarComponent"
import Footer from "./components/Footer/Footer"
import Login from "./containers/Login/Login"

function App() {
  const [showLogin, setShowlogin] = useState(false)

  const login = () => {
    console.log("login")
    // return (
    //   <Route
    //     exact
    //     path='/'
    //     render={(props) => <LandingPage handleLogin={handleLogin} {...props} />}
    //   />
    // )
  }

  const handleLogin = (evnt) => {
    evnt.preventDefault()
    setShowlogin(true)
  }
  return (
    <div>
      <NavbarComponent />
      <Switch>
        <Route
          exact
          path='/'
          render={(props) =>
            showLogin ? (
              <Login />
            ) : (
              <LandingPage handleLogin={handleLogin} {...props} />
            )
          }
        />
        <Route path='/movies/:id/show' component={ShowMovie} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
