import React from 'react';
import { useSelector } from 'react-redux';
import Banner from './components/banner/banner';
import { Header } from './components/header/header';
import ProfileInfo from './components/profile-info/profile-info';
import './profile.css';
const Profile = () => {
    const profile = useSelector((state) => state.profile);
    return (
        <div className="profile-container">
            <Header firstname={profile.firstName} lastName={profile.lastName} />
            <Banner
                bannerPicture={profile.bannerPicture}
                profilePicture={profile.profilePicture}
                edit={true}
            />
            <ProfileInfo profile={profile} />
        </div>
    );
};

export default Profile;
