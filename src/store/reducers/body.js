import _ from "lodash"
import {FLAG_TILE, INIT_BODY, OPEN_TILE} from "Actions";

const initBody = {
    height: 0,
    width: 0,
    bugs: 0,
    field: []
}

const handlers = {
    [INIT_BODY]: (body, {height, width, bugs, field}) => ({
        ...body,
        height, width, bugs, field
    }),
    [OPEN_TILE]: (body, {i, j}) => {
        const resultBody = _.cloneDeep(body)
        resultBody.field[i][j].isOpen = true
        resultBody.field[i][j].isFlag = false
        return resultBody
    },
    [FLAG_TILE]: (body, {i, j}) => {
        const resultBody = _.cloneDeep(body)
        resultBody.field[i][j].isFlag = !body.field[i][j].isFlag
        return resultBody
    }
}


export default (body = initBody, {type, payload}) => _.get(handlers, type, () => body)(body, payload)