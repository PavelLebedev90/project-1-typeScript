import React from 'react';
import classes from './Navigation.module.css';
import {NavLink} from "react-router-dom";




export function Navigation() {
    return (
        <nav className={classes.nav}>
            <span><NavLink to={"/profile"}  className={(navData) => navData.isActive ? `${classes.nav_link}` : "" }>Profile</NavLink> </span>
            <span><NavLink to={"/messages"}className={(navData) => navData.isActive ? `${classes.nav_link}` : "" }>Messages</NavLink></span>
            <span><NavLink to={"/news"}className={(navData) => navData.isActive ? `${classes.nav_link}` : "" }>News</NavLink></span>
            <span><NavLink to={"/music"}className={(navData) => navData.isActive ? `${classes.nav_link}` : "" }>Music</NavLink></span>
            <span><NavLink to={"/settings"}className={(navData) => navData.isActive ? `${classes.nav_link}` : "" }>Settings</NavLink></span>
            <span><NavLink to={"/sign_up"}className={(navData) => navData.isActive ? `${classes.nav_link}` : "" }>Sign up</NavLink></span>
        </nav>
    )
}