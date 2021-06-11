import React from "react"
import { Image } from "react-bootstrap"

function MovieCard(props) {
  const poster_url = "https://image.tmdb.org/t/p/w300"
  return (
    <div className='text-center mb-4 shadow w-md-100 '>
      <div className='card text-light'>
        <div className='card-body bg-light'>
          <Image src={`${poster_url}${props.poster_path}`} fluid />
          <button
            className='btn btn-warning btn-lg mt-2'
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
