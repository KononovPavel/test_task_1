import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from "redux-thunk";
import {PhotoReducer} from "./reducers/photoReducer";


export const rootReducer = combineReducers({
    PhotoReducer
});
export type appStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk));
// @ts-ignore
window.store = store
