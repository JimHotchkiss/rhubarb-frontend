import React from "react"
import Showcase from "../../components/Showcase/Showcase"
import Newsletter from "../../components/Newsletter/Newsletter"
import MovieCards from "../MovieCards/MovieCards"
import Discussions from "../Discussions/Discussions"

function LandingPage() {
  return (
    <div>
      <Showcase />
      <Newsletter />
      <MovieCards />
      <Discussions />
    </div>
  )
}

export default LandingPage
