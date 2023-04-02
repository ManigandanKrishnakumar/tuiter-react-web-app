import { createSlice } from '@reduxjs/toolkit';
import feeds from './feeds';
import {
    createTuitThunk,
    deleteTuitThunk,
    findTuitsThunk,
    updateTuitThunk
} from '../../services/tuits-thunk';

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

const initialState = {
    tuits: [],
    loading: false
};

const feedsSlice = createSlice({
    name: 'feeds',
    initialState: initialState,
    extraReducers: {
        [findTuitsThunk.pending]: (state) => {
            state.loading = true;
            state.tuits = [];
        },
        [findTuitsThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.tuits = payload;
        },
        [findTuitsThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [deleteTuitThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.tuits = state.tuits.filter((t) => t._id !== payload);
        },
        [createTuitThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.tuits.push(payload);
        },
        [updateTuitThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
            state.tuits[tuitNdx] = {
                ...state.tuits[tuitNdx],
                ...payload
            };
        }
    },

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
