import React, { useState } from 'react';
import './Profile.css';

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
    'Rewards',
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
        <div className="right-column">
          <div className="header">
            <h2>{selectedTab}</h2>
            {selectedTab === 'Personal Information' && (
              !isEditing ? (
                <button
                  onClick={handleEdit}
                  className="edit-button"
                >
                  <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Edit Profile
                </button>
              ) : (
                <div className="button-group">
                  <button
                    onClick={handleSave}
                    className="save-button"
                  >
                    <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="cancel-button"
                  >
                    <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Cancel
                  </button>
                </div>
              )
            )}
          </div>

          <div className="content">
            {selectedTab === 'Personal Information' && (
              isEditing ? (
                // Edit Mode
                <div className="edit-grid">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={editedUser.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={editedUser.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Mobile</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={editedUser.mobile}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <select
                      name="gender"
                      value={editedUser.gender}
                      onChange={handleChange}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              ) : (
                // View Mode
                <div className="view-grid">
                  {Object.entries(user).map(([key, value]) => {
                    if (!['profilePic', 'balance', 'orders'].includes(key)) {
                      return (
                        <div key={key} className="info-group">
                          <label className="info-label">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </label>
                          <p className="info-value">{value}</p>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
