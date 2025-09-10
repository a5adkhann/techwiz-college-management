import React from 'react'
import '../assets/css/registeration.css';

function RegisterationForm() {
  return (
    <>
      <div className="registration-form-container">
      <h1 className="form-title">Registration</h1>
      <form>
        <input
          type="text"
          placeholder="Full Name"
          className="form-input"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="form-input"
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
        />
        <input
          type="file"
          className="form-input"
        />

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
    </>
  )
}

export default RegisterationForm