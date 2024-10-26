import React, { useState } from 'react';
import './Profile.css';
import PersonalInformation from './ProfileComponents/PersonalInformation';

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
    balance: "38.00$",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const [selectedTab, setSelectedTab] = useState('Personal Information');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser({ ...user });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value
    });
  };

  const menuItems = [
    'My Wallet',
    'My Rewards',
    'My Orders',
    'Personal Information',
    'Addresses',
    'Payment Methods',
    'Contact Preferences',
    'Social Networks'
  ];

  const handleMenuClick = (item) => {
    setSelectedTab(item);
  };

  return (
    <div className="profile-container">
      <div className="profile-grid">
        {/* Left Column */}
        <div className="left-column">
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-pic-wrapper">
              <div className="profile-pic-gradient"></div>
              <img
                src={user.profilePic}
                alt="Profile"
                className="profile-pic"
              />
            </div>
            <h2 className="profile-name">{user.name}</h2>
            <div className="balance-badge">
              Balance: {user.balance}
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="nav-menu">
            <nav>
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className={`nav-button ${selectedTab === item ? 'selected' : ''}`}
                  onClick={() => handleMenuClick(item)}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Right Column */}
        <PersonalInformation
        selectedTab={selectedTab}
        isEditing={isEditing}
        handleEdit={handleEdit}
        handleSave={handleSave}
        handleCancel={handleCancel}
        handleChange={handleChange}
        editedUser={editedUser}
        user={user}
      />
      </div>
    </div>
  );
};

export default Profile;
