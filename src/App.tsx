import React, {Dispatch} from 'react';
import './App.css';


import {Route, Routes} from 'react-router-dom';
import Profile from './component/Profile/Profile';
import Messages from './component/Messages/Messages';
import News from './component/News/News';
import Music from './component/Music/Music';
import Settings from './component/Settings/Settings';
import {Header} from './component/Header/Header';
import {SignUp} from './component/SignUp/SignUp';
import {ActionType, DataType, StateType, store} from './Redux/State';


type AppType = {
    state: StateType
    /*    addTask: () => void
        UpdateNewPostText: (newPost:string)=>void*/
    dispatch: (action: ActionType) => void
}

const App = (props: AppType) => {
    return (

        <div className={'wrapper_bg'}>
            <Header/>
            <Routes>
                <Route path="/profile/*" element={<Profile statePosts={props.state.profilePage.posts}
                    /*      addTask = {props.addTask}
                          UpdateNewPostText={props.UpdateNewPostText}*/
                                                           dispatch={props.dispatch}
                />}/>
                <Route path="/messages/*" element={<Messages stateDialogs={props.state.dialogsPage}
                                                             dispatch={props.dispatch}/>}/>
                <Route path="/news/*" element={<News/>}/>
                <Route path="/music/*" element={<Music/>}/>
                <Route path="/settings/*" element={<Settings/>}/>
                <Route path="/sign_up/*" element={<SignUp/>}/>
            </Routes>

        </div>
    );
}

export default App;
