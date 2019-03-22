import * as ActionsType from "../constants/city"

const initState = {}
export default function city(state = initState ,action){
    switch(action.type){
        case ActionsType.INIT_CITY:
            return state = action.data;
        case ActionsType.UPDATE_CITY:
            return state = action.data;
        default:
            return state;
    }
}