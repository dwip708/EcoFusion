import React, { useState } from 'react';
import './Profile.css';
import countryList from 'react-select-country-list';
import Select from 'react-select';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    mobile: '123-456-7890',
    gender: 'Male',
    orders: 5,
    joined: '2020-01-15',
    country: 'US',
    profilePic: '/ppic.jpg',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newDetails, setNewDetails] = useState({ ...user });
  const [countries, setCountries] = useState(countryList().getData());

  const handleEdit = () => {
    if (isEditing) {
      if (!validatePhoneNumber(newDetails.mobile)) {
        alert('Invalid phone number');
        return;
      }
      setUser({ ...newDetails });
    }
    setIsEditing(!isEditing);
  };

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

  return (
    <div className="profile">
      <div className="profile-card">
        <div className="profile-pic-container">
          <img src={user.profilePic} alt="Profile" className="profile-pic" />
          <div className="abstract-art"></div>
        </div>
        {isEditing ? (
          <div className="profile-edit">
            <input
              type="text"
              value={newDetails.name}
              onChange={(e) => setNewDetails({ ...newDetails, name: e.target.value })}
              placeholder="Name"
              required
            />
            <div className="phone-container">
              <Select
                className="country-dropdown"
                options={countries}
                value={countries.find(country => country.value === newDetails.country)}
                onChange={(value) => setNewDetails({ ...newDetails, country: value.value })}
                placeholder="Select Country"
              />
              <input
                type="text"
                value={newDetails.mobile}
                onChange={(e) => setNewDetails({ ...newDetails, mobile: e.target.value })}
                placeholder="Mobile"
                required
              />
            </div>
            <select
              value={newDetails.gender}
              onChange={(e) => setNewDetails({ ...newDetails, gender: e.target.value })}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Not to disclose">Not to disclose</option>
            </select>
            <button onClick={handleEdit} className="save-button">Save</button>
          </div>
        ) : (
          <div className="profile-details">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Mobile: {user.mobile}</p>
            <p>Gender: {user.gender}</p>
            <p>Orders: {user.orders}</p>
            <p>Joined: {new Date(user.joined).toLocaleDateString()}</p>
            <p>
              Country: 
              <span className={`flag-icon flag-icon-${user.country.toLowerCase()}`}></span> 
              {user.country}
            </p>
            <button onClick={handleEdit} className="edit-button">Edit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
