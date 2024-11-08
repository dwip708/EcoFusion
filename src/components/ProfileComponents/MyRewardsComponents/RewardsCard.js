import React from 'react';
import './RewardsCard.css';

const RewardsCard = ({ reward }) => {
  const { title, issueDate, expired } = reward;

  const expirationStatus = expired ? 'Expired' : 'Current';
  const statusClass = expired ? 'expired' : 'current';

  return (
    <div className={`reward-card ${statusClass}`}>
      <div>
        <h4>{title}</h4>
        <p>Issued: {new Date(issueDate).toLocaleDateString()}</p>
        <p className={`status ${statusClass}`}>{expirationStatus}</p>
      </div>
      <img src="ticket.png" alt="coupon" height={'80%'}/> 
    </div>
  );
};

export default RewardsCard;
