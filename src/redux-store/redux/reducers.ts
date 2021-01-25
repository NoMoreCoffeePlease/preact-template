import produce from "immer";

import { SET_THEME, WebActions } from "./action-types";
import { InitialState } from "./payload-types";

const INITIAL_STATE: InitialState = {
    theme: "dark-theme"
};

export const webReducer = (state = INITIAL_STATE, action: WebActions) => {
    switch (action.type) {
        case SET_THEME:
            return produce(state, nextState =>
                Object.assign(nextState, {
                    theme: action.payload
                })
            );
        default:
            return state;
    }
};
