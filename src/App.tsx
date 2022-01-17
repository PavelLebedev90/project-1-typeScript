import React from 'react';
import './App.css';


import {Route, Routes} from 'react-router-dom';
import Messages from './component/Messages/Messages';
import Music from './component/Music/Music';
import Settings from './component/Settings/Settings';
import {Header} from './component/Header/Header';
import {SignUp} from './component/SignUp/SignUp';
import {UsersContainer} from './component/Users/UsersContainer';
import ProfileContainer from './component/Profile/ProfileContainer';






const App = () => {
    return (
        <div className={'wrapper_bg'}>
            <Header/>
            <Routes>
                <Route path="/profile" element={<ProfileContainer/>}/>
                <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                <Route path="/messages/*" element={<Messages/>}/>
                <Route path="/users/*" element={<UsersContainer/>}/>
                <Route path="/music/*" element={<Music/>}/>
                <Route path="/settings/*" element={<Settings/>}/>
                <Route path="/sign_up/*" element={<SignUp/>}/>
            </Routes>

        </div>
    );
}

export default App;
