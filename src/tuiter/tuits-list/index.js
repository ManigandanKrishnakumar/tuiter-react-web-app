import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import TuitItem from './tuit-item';

import './index.css';
import { deleteTuitThunk, findTuitsThunk } from '../../services/tuits-thunk';

const TuitsList = () => {
    const { tuits, loading } = useSelector((state) => state.feeds);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findTuitsThunk());
    }, []);

    return (
        <div className="tuits-container">
            {loading && <li className="list-group-item">Loading...</li>}

            {tuits.map((feed) => {
                return <TuitItem tuit={feed} key={feed._id} />;
            })}
        </div>
    );
};

export default TuitsList;
