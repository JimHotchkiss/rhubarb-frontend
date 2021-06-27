import React from "react"
import Showcase from "../../components/Showcase/Showcase"
import Newsletter from "../../components/Newsletter/Newsletter"
import MovieCards from "../MovieCards/MovieCards"
import Discussions from "../Discussions/Discussions"

function LandingPage(props) {
  return (
    <div>
      <Showcase handleLogin={props.handleLogin} />
      {console.log(props.text)}
      <Newsletter />
      <MovieCards />
      {/* <Discussions /> */}
    </div>
  )
}

export default LandingPage
