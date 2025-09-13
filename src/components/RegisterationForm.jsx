import React from 'react'
import '../assets/css/registeration.css';
import { Link, useNavigate } from 'react-router-dom';
import BG from './BG';

function RegisterationForm() {
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/home");
  }
  return (
    <>
      <BG />
      <div className="overall">
      <div className="registration-form-container">
          <h1 className="form-title">Registration</h1>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Full Name"
              className="form-input"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="form-input"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="form-input"
              required
            />
            <input
              type="file"
              className="form-input"
              required
            />

            <div className='registeration-link' style={{marginBottom: "10px"}}>
              <p>Go to <Link to="/home" style={{color: "#27A5DE"}}>Home</Link></p>
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
      </div>
      </div>
    </>
  )
}

export default RegisterationForm