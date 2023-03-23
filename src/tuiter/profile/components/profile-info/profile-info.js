import React from 'react';

import './profile-info.css';

const ProfileInfo = ({ profile }) => {
    return (
        <div className="profile-info-container">
            <div className="profile-handle">
                <p className="profile-name">
                    <span>{profile.firstName}</span> <span> {profile.lastName}</span>
                </p>
                <p className="handle">{profile.handle}</p>
            </div>

            <div className="profile-bio">
                <p>{profile.bio}</p>
            </div>

            <div className="profile-metadata-container">
                <div className="meta-data">
                    <i className="bi bi-geo-alt"></i>
                    <span className="value">{profile.location}</span>
                </div>

                <div className="meta-data">
                    <i className="bi bi-balloon"></i>
                    <span className="value">Born {profile.dateOfBirth}</span>
                </div>

                <div className="meta-data">
                    <i className="bi bi-calendar3"></i>
                    <span className="value">Joined {profile.dateJoined}</span>
                </div>
            </div>

            <div className="metrics-container">
                <p>
                    <span className="count">{profile.followingCount}</span>
                    <span className="label">Following</span>
                </p>

                <p>
                    <span className="count">{profile.followersCount}</span>
                    <span className="label">Followers</span>
                </p>
            </div>
        </div>
    );
};

export default ProfileInfo;
