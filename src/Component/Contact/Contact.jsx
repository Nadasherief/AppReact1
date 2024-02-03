import React, { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    document.title = 'Cotact';
  }, []);
  return (
    <div className="mb-4">
      <div className="pt-3 container">
        <div className="text-center pt-4" style={{ color: 'rgb(44, 62, 80)' }}>
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">Contact Section</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3" style={{ backgroundColor: 'rgb(44, 62, 80)', width: '90px', height: '5px' }}></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3" style={{ backgroundColor: 'rgb(44, 62, 80)', width: '90px', height: '5px' }}></div>
          </div>
        </div>
        <form noValidate action="" className="w-50 p-3 mx-auto mt-5">
          <input
            id="userName"
            type="text"
            placeholder="Username"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative"
          />

          <input
            id="userAge"
            type="text"
            placeholder="User Age"
            name="userAge"
            className="form-control border-0 border-bottom py-3 position-relative"
          />

          <input id="userEmail"
            type="text"
            placeholder="User Email"
            name="userEmail"
            className="form-control border-0 border-bottom py-3 position-relative"/>
          <input
            id="userPassword"
            type="text"
            placeholder="User Password"
            name="userPassword"
            className="form-control border-0 border-bottom py-3 position-relative"
          />

          <button className="btn mt-4 text-white" style={{ backgroundColor: '#1abc9c' }}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
