import React from "react";
import classes from "./SignUp.module.css";

export function SignUp(){
    return (
        <div className={classes.sign}>
            <h1 className={classes.title}>Your Best Social Networks</h1>
            <p className={classes.subtitle}>Make your creative works online and deliver to the world </p>
            <div className={classes.registration}>SIGN UP NOW</div>
        </div>
    )
}