import React, { useState } from 'react';
import './Profile.css';
import MyRewards from './ProfileComponents/MyRewardsComponents/MyRewards';
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

  const rewards = [
    { id: 1, title: '10% off on Electronics', issueDate: '2024-10-01', expired: false },
    { id: 2, title: 'Buy 1 Get 1 Free', issueDate: '2024-09-15', expired: true },
    { id: 3, title: '5% Cashback on Grocery', issueDate: '2024-08-10', expired: false },
    { id: 4, title: '15% off on Fashion', issueDate: '2024-07-30', expired: true },
    { id: 5, title: '20% off on Flights', issueDate: '2024-09-05', expired: false }
  ];

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

  const handleMenuItemView = () => {
    switch (selectedTab) {
      case "My Rewards": 
        return <MyRewards rewards={rewards}/>; 
      case "Personal Information": 
        return (
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
        )
          
    }
  }

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
        {handleMenuItemView()}
      </div>
    </div>
  );
};

export default Profile;
