import React, { useState } from 'react';
import '../assets/css/welcomemodal.css';

const WelcomeModal = ({ isOpen, onSubmit }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (name && role) {
      onSubmit(name, role);
    } else {
      alert("Please enter name and select role");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Welcome! Please Enter Your Info</h2>

        <input 
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="name-input"
        />

        {/* Role Selection */}
        <div className='cta-buttons'>
          <button onClick={() => setRole('Student')} className={role === 'Student' ? "btn-primary active" : "btn-primary"}>
            Student 🎓
          </button>
          <button onClick={() => setRole('Staff')} className={role === 'Staff' ? "btn-primary active" : "btn-primary"}>
            Staff 👨‍🏫
          </button>
          <button onClick={() => setRole('Guest')} className={role === 'Guest' ? "btn-primary active" : "btn-primary"}>
            Guest 👥
          </button>
        </div>

        {/* Submit */}
        <div className='cta-buttons'>
          <button onClick={handleSubmit} className={role === 'Guest' ? "btn-primary btn-submit active" : "btn-primary btn-submit"}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
