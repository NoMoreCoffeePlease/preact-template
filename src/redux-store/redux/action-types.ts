export const SET_THEME = "SET_THEME";

export type SetThemeAction = {
    type: typeof SET_THEME;
    payload: string;
};

export type WebActions = SetThemeAction;
