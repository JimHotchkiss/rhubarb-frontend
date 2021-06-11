import React from "react"
import { Image } from "react-bootstrap"

function MovieCard(props) {
  const poster_url = "https://image.tmdb.org/t/p/w300"
  return (
    <div className='text-center mb-4 mr-4' style={{ maxWidth: "18rem" }}>
      <div className='card bg-dark text-light'>
        <div className='card-body'>
          <Image src={`${poster_url}${props.poster_path}`} fluid />
          <h3 className='card-title mb-3'>{props.title}</h3>
          <button
            className='btn btn-warning btn-lg'
            type='button'
            style={{ width: "100%" }}>
            See more
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
