import { createSlice } from '@reduxjs/toolkit';
import feeds from './feeds';

const currentUser = {
    dp: '/images/nasa.png',
    username: 'NASA',
    userHandle: '@nasa'
};

const templateTuit = {
    ...currentUser,
    date: '2h',
    liked: false,
    metrics: {
        comments: 0,
        retweets: 0,
        likes: 0
    }
};

const feedsSlice = createSlice({
    name: 'feeds',
    initialState: feeds,
    reducers: {
        deleteTuit(state, action) {
            const index = state.findIndex((tuit) => tuit._id === action.payload);
            state.splice(index, 1);
        },

        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                id: new Date().getTime()
            });
        }
    }
});
export const { createTuit, deleteTuit } = feedsSlice.actions;
export default feedsSlice.reducer;
