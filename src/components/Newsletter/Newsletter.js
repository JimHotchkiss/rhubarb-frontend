import React from "react"

function Newsletter() {
  return (
    <section className='bg-primary p-4'>
      <div className='container py-4'>
        <div className='row px-lg-0 px-md-2'>
          <div className='col-lg'>
            {" "}
            <div className='d-flex justify-content-between align-items-center pt-2'>
              <h3 className='text-light'>Join Our News Letter</h3>
            </div>
          </div>
          <div className='col-lg'>
            <div className='input-group news-input'>
              <input
                type='text'
                className='form-control py-4'
                placeholder='Your eamil here'
              />
              <button className='btn btn-dark btn-lg' type='button'>
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
