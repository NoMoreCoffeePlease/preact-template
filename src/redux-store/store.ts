import { createStore, combineReducers, applyMiddleware, Store } from "redux";
import { webReducer } from "./redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    web: webReducer
});

export const store: Store = createStore(rootReducer, applyMiddleware(thunk));
