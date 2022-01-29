import {getMe} from '../api/api';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'



let initialStateAuth = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
 export type InitialStateAuthType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}
export const authReducer = (state: InitialStateAuthType = initialStateAuth, action: ActionType): InitialStateAuthType => {
    switch (action.type) {
        case 'SET_AUTH_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}
type ActionType = ReturnType<typeof setUserData>
export const setUserData = (userId: number, email: string, login: string) => {
    return  {
            type: SET_AUTH_USER_DATA,
            data: {
                userId,
                email,
                login
            }
        } as const

}

export const setUserDataThunk = () =>(dispatch: (action:ActionType)=>void) =>{
    getMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setUserData(id, email, login))
            }
        })
}