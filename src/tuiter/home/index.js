import React from 'react';
import TuitsList from '../tuits-list';
import WhatsHappening from './whats-happening';

const HomeComponent = () => {
    return (
        <>
            <h1>Home</h1>
            <WhatsHappening />
            <TuitsList />
        </>
    );
};

export default HomeComponent;
