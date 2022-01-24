import axios, {AxiosInstance} from 'axios';


const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b9ab541c-e0c5-4e3f-a6cb-7e9f4deadb80'
    }
})

export const getUsers = (currentPage:number, pageSize:number)=>{
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>response.data)
}

export const getMe = () =>{
    return instance.get('auth/me').then(response=>response.data)
}

export const getUserProfile = (id:string)=>{
    return instance.get(`profile/${id}`).then(response=>response.data)
}

export const changeUnFollowedUser = (id:number)=>{
    return instance.delete(`follow/${id}`).then(response=>response.data)
}

export const changeFollowedUser = (id:number)=>{
    return instance.post(`follow/${id}`, {}).then(response=>response.data)
}

