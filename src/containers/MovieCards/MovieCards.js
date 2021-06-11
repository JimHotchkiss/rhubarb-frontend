import React, { useEffect, useState } from "react"
import MovieCard from "../../components/MovieCard/MovieCard"
import { Row, Col, Container } from "react-bootstrap"
function MovieCards() {
  const [movies, setMovies] = useState([])
  const MOVIE_KEY = process.env.REACT_APP_MOVIE_API_KEY

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=178f905339c28367429420feff5fa554&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
  }, [])

  const movieCard = movies.map((movie) => (
    <MovieCard
      key={Math.random()}
      poster_path={movie.poster_path}
      title={movie.title}
      movieId={movie.id}
      vote_average={movie.vote_average}
      release_date={movie.release_date}
    />
  ))
  // d-flex flex-row flex-wrap justify-content-between
  return (
    <section className='bg-dark'>
      <Container id='now-playing' className='pt-4'>
        <div className='d-flex flex-row flex-wrap justify-content-between'>
          {movieCard}
        </div>
      </Container>
    </section>
  )
}

export default MovieCards
