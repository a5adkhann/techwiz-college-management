import React, { useState } from 'react';

const UserNamePrompt = ({ onSubmit }) => {
  const [userName, setUserName] = useState('');

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = () => {
    if (userName.trim()) {
      onSubmit(userName);
    } else {
      alert('Please enter your name.');
    }
  };

  return (
    <div className="username-prompt">
      <h2>Please enter your name</h2>
      <input
        type="text"
        value={userName}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UserNamePrompt;
