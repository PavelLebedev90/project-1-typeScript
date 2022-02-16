import {getMe, userLogin, userLogout} from '../api/api';
import {FormDataType} from '../component/SignUp/Login';
import {Dispatch} from 'react';
import {stopSubmit} from 'redux-form';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'



let initialStateAuth = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    password: null,
    rememberMe: false

}
export type InitialStateAuthType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    rememberMe: boolean
    password: string | null
}
export const authReducer = (state: InitialStateAuthType = initialStateAuth, action: ActionType): InitialStateAuthType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,

            }

        default:
            return state
    }
}
type ActionType = ReturnType<typeof setUserData>


export const setUserData =
    (userId: number | null, email: string | null, login: string | null, isAuth:boolean)  => {
    return {
        type: SET_AUTH_USER_DATA,
        data: {
            userId,
            email,
            login,
            isAuth
        }
    } as const

}



export const setUserDataThunk = () => (dispatch: (action: ActionType) => void) => {
    getMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                console.log(data)
                dispatch(setUserData(id, email, login, true))
            }
        })
}

export const login = (data: FormDataType) => (dispatch: any) => {
    userLogin(data)
        .then((res) => {
          if(res.data.resultCode === 0){
              dispatch(setUserDataThunk())
          }else{
              const error = res.data.messages.length > 0 ? res.data.messages[0] : 'some Error'
              dispatch(stopSubmit('login', {_error:error}))
          }
        })
}

export const logout = () => (dispatch: Dispatch<any>) => {
    userLogout()
        .then(() => {
            dispatch(setUserData(null, null, null, false))
        })
}
