import _ from "lodash"
import {INIT_BODY, OPEN_TILE} from "Actions";

const initBody = {
    height: 10,
    width: 10,
    field: []
}

const handlers = {
    [INIT_BODY]: (body, {height, width, field}) => {
        return {...body,
            height, width, field}
    },
    [OPEN_TILE]: (body, {i,j}) => {
        const resultBody = _.cloneDeep(body)
        resultBody.field[i][j].isOpen = true
        return resultBody
    }
}



export default (body = initBody, {type, payload}) => _.get(handlers, type, () => body)(body, payload)