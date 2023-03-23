import React from 'react';
import { useNavigate } from 'react-router';

import './edit-profile-header.css';

const EditProfileHeader = ({ onSave }) => {
    const navigate = useNavigate();
    return (
        <div className="edit-profile-header-container">
            <div className="page-control">
                <i className="bi bi-x-lg close" onClick={() => navigate(-1)}></i>
                <p className="title"> Edit </p>
            </div>

            <button className="btn btn-primary save-button" type="submit" onClick={onSave}>
                Save
            </button>
        </div>
    );
};

export default EditProfileHeader;
