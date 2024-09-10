// src/Profile.js
import React, { useState } from 'react';
import profile from '../profile/Profile.css'


const Profile = () => {
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
const [image, setImage] = useState(null);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }
};


  const handleUpload = () => {
    if (!selectedFile) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    // Perform the upload request (example using fetch)
    fetch('https://your-upload-endpoint.com/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log('Upload successful:', data);
    })
    .catch(error => {
      console.error('Error uploading file:', error);
    });
  };
  return (
    <div className="container">
    <div className="profile-container">
      <h1>Profile Page</h1>
      <div className="profile-photo">
       
        <input 
          type="file" 
          accept="image.png/*" 
          onChange={handleFileChange} 
          id="upload-photo"
          style={{ display: 'none' }}
        />
        <label htmlFor="upload-photo" className="upload-icon">
       <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {image && <img src={image} alt="Preview" style={{borderRadius: '30%', marginTop: '20px', maxWidth: '100%' }} />}
    </div>       </label>
      </div>
      <div className="profile-details">
        <div className="profile-field">
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div className="profile-field">
          <label>Phone No:</label>
          <input 
            type="text" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
          />
        </div>
        <div className="profile-field">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="profile-field">
          <label>Address:</label>
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
