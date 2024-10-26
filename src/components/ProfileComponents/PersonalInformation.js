// PersonalInformation.js
import React from 'react';
import './PersonalInformation.css';
const PersonalInformation = ({
  selectedTab,
  isEditing,
  handleEdit,
  handleSave,
  handleCancel,
  handleChange,
  editedUser,
  user
}) => {
  return (
    <div className="personal-information-right-column">
      <div className="personal-information-header">
        <h2>{selectedTab}</h2>
        {selectedTab === 'Personal Information' && (
          !isEditing ? (
            <button onClick={handleEdit} className="personal-information-edit-button">
              <svg className="personal-information-button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Edit Profile
            </button>
          ) : (
            <div className="personal-information-button-group">
              <button onClick={handleSave} className="personal-information-save-button">
                <svg className="personal-information-button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Save
              </button>
              <button onClick={handleCancel} className="personal-information-cancel-button">
                <svg className="personal-information-button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Cancel
              </button>
            </div>
          )
        )}
      </div>

      <div className="personal-information-content">
        {selectedTab === 'Personal Information' && (
          isEditing ? (
            // Edit Mode
            <div className="personal-information-edit-grid">
              <div className="personal-information-form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={editedUser.name}
                  onChange={handleChange}
                />
              </div>
              <div className="personal-information-form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={editedUser.email}
                  onChange={handleChange}
                />
              </div>
              <div className="personal-information-form-group">
                <label>Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  value={editedUser.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="personal-information-form-group">
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
            <div className="personal-information-view-grid">
              {Object.entries(user).map(([key, value]) => {
                if (!['profilePic', 'balance', 'orders'].includes(key)) {
                  return (
                    <div key={key} className="personal-information-info-group">
                      <label className="personal-information-info-label">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </label>
                      <p className="personal-information-info-value">{value}</p>
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
  );
};

export default PersonalInformation;
