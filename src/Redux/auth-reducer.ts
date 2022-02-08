import {getMe, newUserLogin} from '../api/api';
import {FormDataType} from '../component/SignUp/Login';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_FORM_DATA = 'SET_FORM_DATA'


let initialStateAuth = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    password: null,
    rememberMe:false

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
                isAuth: true
            }
        case SET_FORM_DATA:
            return {
                ...state,
             ...action.data
            }
        default:
            return state
    }
}
type ActionType = ReturnType<typeof setUserData> | ReturnType<typeof setUserFormData>


export const setUserData = (userId: number, email: string, login: string) => {
    return {
        type: SET_AUTH_USER_DATA,
        data: {
            userId,
            email,
            login
        }
    } as const

}

export const setUserFormData = (login: string, password: string, rememberMe: boolean) => {
    return {
        type: SET_FORM_DATA,
        data: {
            password,
            login,
            rememberMe
        }
    } as const

}


export const setUserDataThunk = () => (dispatch: (action: ActionType) => void) => {
    getMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setUserData(id, email, login))
            }
        })
}

export const setFormDataThunk = (data: FormDataType) => (dispatch: (action: ActionType) => void) => {
    newUserLogin(data)
        .then(() => {
           let {password, login, rememberMe} = data
            dispatch(setUserFormData(login, password, rememberMe))
        })
}
