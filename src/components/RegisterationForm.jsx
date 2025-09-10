import React from 'react'
import '../assets/css/registeration.css';
import { Link } from 'react-router-dom';
import BG from './BG';

function RegisterationForm() {
  return (
    <>
    <BG/>
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

        <div className='registeration-link'>
          <p>Go to <Link to="/">Home</Link></p>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
    </>
  )
}

export default RegisterationForm