import React from 'react';
import classes from "./Header.module.css";
import {Navigation} from "./Navigation/Navigation";


export function Header(){
    return (
        <header className={classes.header}>
            <div className={classes.title}>
                <span className={classes.title_blue}>TVER</span>network
            </div>
            <div>
                <Navigation/>
            </div>
            <div className={classes.searchButton}>
                <input className={classes.input} type="text" placeholder={"Search"}/>
                <span className={classes.search}>+</span>
            </div>
        </header>
    )
}

