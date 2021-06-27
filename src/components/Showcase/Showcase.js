import React from "react"
import { Button, Image } from "react-bootstrap"
import MovieNight from "./img/movie-night.svg"

function Showcase(props) {
  return (
    <section className='bg-dark text-light p-5 '>
      <div className='container'>
        <div className='d-sm-flex flex-row justify-content-between'>
          <div className='pt-4'>
            <h1>
              Everything <span className='text-warning'>Movies</span>
            </h1>
            <div style={{ marginRight: 4 }}>
              <p className='lead my-4 pr-5'>
                Here you can read reviews, see what's playing, and engage in
                conversations ranging in movie topics from plot twist to hidden
                meanings.
              </p>
            </div>
            <Button
              size='lg'
              style={{ width: "58%" }}
              onClick={props.handleLogin}>
              Login
            </Button>
          </div>
          <Image
            src={MovieNight}
            fluid
            width='50%'
            className='d-md-block d-none pl-4 pb-0'
          />
        </div>
      </div>
    </section>
  )
}

export default Showcase
