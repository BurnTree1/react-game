export const INIT_BODY = "BODY/INIT"

export const initBody = () => ({
    type: INIT_BODY,
    payload: {
        height: 10,
        width: 10,
        bombs: 20
    }
})