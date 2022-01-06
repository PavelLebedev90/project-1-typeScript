import React from 'react';
import './App.css';


import {Route, Routes} from 'react-router-dom';
import Profile from './component/Profile/Profile';
import Messages from './component/Messages/Messages';
import News from './component/News/News';
import Music from './component/Music/Music';
import Settings from './component/Settings/Settings';
import {Header} from './component/Header/Header';
import {SignUp} from './component/SignUp/SignUp';
import {ActionType, StateType} from './Redux/State';


type AppType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

const App = () => {
    return (
        <div className={'wrapper_bg'}>
            <Header/>
            <Routes>
                <Route path="/profile/*" element={<Profile/>}/>
                <Route path="/messages/*" element={<Messages/>}/>
                <Route path="/news/*" element={<News/>}/>
                <Route path="/music/*" element={<Music/>}/>
                <Route path="/settings/*" element={<Settings/>}/>
                <Route path="/sign_up/*" element={<SignUp/>}/>
            </Routes>

        </div>
    );
}

export default App;
