import { createStore } from "redux"
import rootReducer from "../reducers"

export default function configureStore(){
    const store = createStore(rootReducer,
        // 开发工具
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
    )

    return store;
}