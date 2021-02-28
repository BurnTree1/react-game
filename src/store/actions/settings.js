export const INIT_SETTINGS = "SETTINGS/INIT"

export const initSettings = (settings) => ({
  type: INIT_SETTINGS,
  payload: {settings}
})
