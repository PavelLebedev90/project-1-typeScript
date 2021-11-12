import React from 'react';
import './App.css';

import {Header} from "./component/Header";
import {Navigation} from "./component/Navigation";
import {Profile} from "./component/Profile";
import {Footer} from "./component/Footer";


export const App = () => {
    return (
        <div className={"wrapper"}>
            <Header/>
            <Navigation/>
            <Profile/>
            <Footer/>
        </div>
    )
}


