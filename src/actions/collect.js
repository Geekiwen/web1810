import * as actionsType from "../constants/collect"

export function setCollect(data){
    return{
        type:actionsType.COLLECTED,
        data
    }
}

export function cancelCollect(data){
    return{
        type:actionsType.UNCOLLECT,
        data
    }
}