import React from 'react';

import './edit-profile-form.css';

const EditProfileForm = ({ profileData, setProfileData }) => {
    const onValueChange = (field, e) => {
        setProfileData((state) => {
            return {
                ...state,
                [field]: e.target.value
            };
        });
    };

    return (
        <div className="edit-profile-form-container">
            <div className="input-group wd-input">
                <span className="input-group-text">First name</span>
                <input
                    type="text"
                    aria-label="First name"
                    className="form-control"
                    value={profileData.firstName}
                    onChange={(e) => onValueChange('firstName', e)}
                />
                <span className="input-group-text">Last name</span>
                <input
                    type="text"
                    aria-label="Last name"
                    className="form-control"
                    value={profileData.lastName}
                    onChange={(e) => onValueChange('lastName', e)}
                />
            </div>

            <div className="input-group wd-input">
                <span className="input-group-text">Bio</span>
                <textarea
                    className="form-control"
                    aria-label="Bio"
                    value={profileData.bio}
                    onChange={(e) => onValueChange('bio', e)}></textarea>
            </div>

            <div className="mb-3 wd-input">
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon3">
                        http://
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        value={profileData.website}
                        onChange={(e) => onValueChange('website', e)}
                    />
                </div>
            </div>

            <div className="input-group mb-3 wd-input">
                <span className="input-group-text" id="basic-addon1">
                    Birth date
                </span>
                <input
                    type="date"
                    className="form-control"
                    aria-describedby="basic-addon1"
                    value={profileData.dateOfBirth.split('/').reverse().join('-')}
                    onChange={(e) => onValueChange('dateOfBirth', e)}
                />
            </div>
        </div>
    );
};

export default EditProfileForm;
