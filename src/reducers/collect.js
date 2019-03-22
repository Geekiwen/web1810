import * as actionsType from "../constants/collect"

const initState = []

export default function collect(state = initState,action){
    switch(action.type){
        case actionsType.COLLECTED:
            state.push(action.data); // push的返回值是数组长度
            return state;
        case actionsType.UNCOLLECT:
            return  state.filter((item) => {
                // 通过id判断两条数据是否相同：用户要删除数据的id，便利state中所有数据的id做对比
                if(item.id !== action.data.id){
                    return item
                }
            });
        default:
            return state;
    }
}