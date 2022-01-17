import React from 'react';
import userClass from '../../Users/Users.module.css';

const Preloader = () => {
    return (
        <>
            <span className={userClass.preloader}></span>
        </>
    );
};

export default Preloader;