import React from 'react';
import './App.css';


import {Route, Routes} from 'react-router-dom';
import Music from './component/Music/Music';
import Settings from './component/Settings/Settings';
import {Header} from './component/Header/Header';
import {UsersContainer} from './component/Users/UsersContainer';
import ProfileContainer from './component/Profile/ProfileContainer';
import SignUpContainer from './component/SignUp/SignUpContainer';
import {DialogContainer} from './component/Messages/Dialog/DialogContainer';






const App = () => {
    return (
        <div className={'wrapper_bg'}>
            <Header/>
            <Routes>
                <Route path="/profile" element={<ProfileContainer/>}/>
                <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                <Route path="/messages/*" element={<DialogContainer/>}/>
                <Route path="/users/*" element={<UsersContainer/>}/>
                <Route path="/music/*" element={<Music/>}/>
                <Route path="/settings/*" element={<Settings/>}/>
                <Route path="/sign_up/*" element={<SignUpContainer/>}/>
            </Routes>

        </div>
    );
}

export default App;
