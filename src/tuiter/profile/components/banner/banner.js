import React from 'react';
import { useNavigate } from 'react-router';

import './banner.css';

const Banner = ({ bannerPicture, profilePicture, edit }) => {
    const navigate = useNavigate();
    return (
        <div className="banner-container">
            <div className="banner-wrapper">
                <img src={bannerPicture} className="banner-img" />
                <img src={profilePicture} className="dp" />
            </div>
            {edit && (
                <button
                    type="button"
                    className="btn btn-outline-secondary wd-edit-profile-btn"
                    onClick={() => {
                        navigate('/tuiter/edit-profile');
                    }}>
                    Edit Profile
                </button>
            )}
            <div className="clear-fix"></div>
        </div>
    );
};

export default Banner;
