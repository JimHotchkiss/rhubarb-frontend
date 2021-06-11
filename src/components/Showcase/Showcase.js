import React from "react"
import { Button, Image } from "react-bootstrap"
import MovieNight from "./img/movie-night.svg"

function Showcase() {
  return (
    <section className='bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start'>
      <div className='container'>
        <div className='d-sm-flex flex-row align-items-center justify-content-between'>
          <div>
            <h1>
              Everything <span className='text-warning'>Movies</span>
            </h1>
            <p className='lead my-4'>
              Here you can read reviews, see what's playing, and engage in
              conversations ranging in topics from plot twist to hidden
              meanings.
            </p>
            <Button>Sign Up</Button>
          </div>
          <Image src={MovieNight} fluid width='50%' />
        </div>
      </div>
    </section>
  )
}

export default Showcase
