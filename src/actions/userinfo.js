import * as actionsType from "../constants/userinfo"

export function login(data){
    return{
        type:actionsType.USERINFO_LOGIN,
        data
    }
}

export function reLogin(data){
    return{
        type:actionsType.USERINFO_RELOGIN,
        data
    }
}