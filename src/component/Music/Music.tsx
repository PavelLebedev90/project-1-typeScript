import classes from './../SignUp/SignUp.module.css';
import {useState} from 'react';


function Music() {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    const [obj, setObj] = useState({})

    const check = (...args: Array<string>) => {
        setObj({
            name: args[0],
            age: args[1],
            weight: args[2]
        })
    }
    return (


        <div className={classes.sign}>
            I am page Music

            <input type="text" value={value1} onChange={e => setValue1(e.currentTarget.value)}/>
            <input type="text" value={value2} onChange={e => setValue2(e.currentTarget.value)}/>
            <input type="text" value={value3} onChange={e => setValue3(e.currentTarget.value)}/>
            <button onClick={() => check(value1, value2, value3)}></button>
            <span>{Object.entries(obj)}</span>
        </div>
    )
}

export default Music;