import { createSlice } from '@reduxjs/toolkit';

const initialProfile = {
    firstName: 'Manigandan ',
    lastName: 'Krishnakumar',
    handle: '@ashvin_mani',
    profilePicture: '/images/nasa.png',
    bannerPicture: '/images/banner.jpg',
    bio: `Full Stack Developer | Cybersecurity Graduate Student | Offensive Security Engineer`,
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '07/07/1968',
    dateJoined: '4/2009',
    followingCount: 340,
    followersCount: 223
};

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialProfile,
    reducers: {
        updateProfileInfo(state, action) {
            return {
                ...state,
                ...action.payload
            };
        }
    }
});
export const { updateProfileInfo } = profileSlice.actions;
export default profileSlice.reducer;
