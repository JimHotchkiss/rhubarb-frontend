import React, { useEffect, useState } from "react"

function ShowMovie(props) {
  const [movieData, setMovieData] = useState({})
  const MOVIE_KEY = process.env.REACT_APP_MOVIE_API_KEY

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${MOVIE_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovieData(data))
  }, [])

  return (
    <div>
      {movieData.title}
      {console.log(movieData)}
    </div>
  )
}

export default ShowMovie
