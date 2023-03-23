import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Banner from '../profile/components/banner/banner';
import { updateProfileInfo } from '../reducers/profile-reducer';
import EditProfileForm from './components/edit-profile-form/edit-profile-form';
import EditProfileHeader from './components/edit-profile-header/edit-profile-header';

import './index.css';

const EditProfile = () => {
    const profile = useSelector((state) => state.profile);
    const [profileData, setProfileData] = useState(profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSave = () => {
        dispatch(updateProfileInfo(profileData));
        navigate(-1);
    };
    return (
        <div className="edit-profile-container">
            <EditProfileHeader onSave={onSave} />
            <Banner
                bannerPicture={profile.bannerPicture}
                profilePicture={profile.profilePicture}
                edit={false}
            />
            <EditProfileForm profileData={profileData} setProfileData={setProfileData} />
        </div>
    );
};

export default EditProfile;
