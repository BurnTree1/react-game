export const INIT_SETTINGS = "SETTINGS/INIT"
export const SET_MODE = "SETTINGS/SET_MODE"

export const initSettings = (settings) => ({
    type: INIT_SETTINGS,
    payload: {settings}
})

export const setMode = (mode) => ({
    type: SET_MODE,
    payload: {mode}
})