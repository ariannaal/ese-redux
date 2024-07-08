import { useState } from 'react';


const FavouriteJobs = ({ job }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="job-card">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <button >Add to favorites</button>
            <div
                className="star"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ fontSize: isHovered ? '2em' : '1em', cursor: 'pointer' }}
            >
                ★
            </div>
        </div>
    );
};

export default FavouriteJobs;