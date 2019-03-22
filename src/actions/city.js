import * as ActionsType from "../constants/city"

export function setCity(data){
    return{
        type:ActionsType.INIT_CITY,
        data
    }
}

export function updateCity(data){
    return{
        type:ActionsType.UPDATE_CITY,
        data
    }
}