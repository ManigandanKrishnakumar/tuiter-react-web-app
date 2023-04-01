import React from 'react';
import { useNavigate } from 'react-router';

import './header.css';

export const Header = ({ firstname, lastName }) => {
    const navigation = useNavigate();
    return (
        <div className="header-container">
            <div onClick={() => navigation(-1)} className="back-button">
                <i className="bi bi-arrow-left"></i>
            </div>

            <div className="profile-info">
                <p className="profile-name">
                    {firstname} {lastName}
                </p>
                <p className="total-tweets">5,999 tweets</p>
            </div>
        </div>
    );
};
