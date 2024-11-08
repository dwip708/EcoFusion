
import React, { useState } from 'react';
import './MyRewards.css';
import RewardsCard from './RewardsCard';

const MyRewards = ({rewards}) => {
    const [showAll, setShowAll] = useState(false);

    const displayedRewards = showAll ? rewards : rewards.slice(0, 3);

    return(
        <div className="rewards-section">
            <h2>Your Rewards</h2>
            <div className="rewards-list">
                <div className="reward-cards">
                    {displayedRewards.length === 0 ? (
                        <p className="no-rewards">No current rewards available.</p>
                    ) : (
                        displayedRewards.map(reward => <RewardsCard key={reward.id} reward={reward} />)
                    )} 
                </div>
                
                {/* Show more button */}
                {rewards.length > 3 && (
                    <button className="show-more" onClick={() => setShowAll(!showAll)}>
                        {showAll ? 'Show Less' : 'Show More'}
                    </button>
                )}
            </div>
        </div>
    )
}

export default MyRewards;