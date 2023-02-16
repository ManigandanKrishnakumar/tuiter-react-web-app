import React from 'react';
import TuitItem from './tuit-item';
import tuits from './tuits';

import './index.css';

const TuitsList = () => {
    return (
        <>
            {tuits.map((tuit) => {
                return <TuitItem tuit={tuit} key={tuit.id} />;
            })}
        </>
    );
};

export default TuitsList;
