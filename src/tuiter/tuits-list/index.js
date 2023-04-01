import React from 'react';

import { useSelector } from 'react-redux';

import TuitItem from './tuit-item';

import './index.css';

const TuitsList = () => {
    const feeds = useSelector((state) => state.feeds);
    return (
        <div className="tuits-container">
            {feeds.map((feed) => {
                return <TuitItem tuit={feed} key={feed.id} />;
            })}
        </div>
    );
};

export default TuitsList;
