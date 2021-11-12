import React from "react";
import classes from "./../modul_css/Navigation.module.css";

export function Navigation(){
    return(
        <nav className={classes.nav}>
            <ul className={classes.nav_lists}>
                <li className={classes.header}>Profile</li>
                <li>Message</li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </nav>
    )
}
