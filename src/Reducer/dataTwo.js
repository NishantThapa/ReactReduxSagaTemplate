import * as Constant from '../Constant'
const initialState = {
    Bulb: "ON"
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case Constant.ON:
            return { Bulb: "ON" }
        case Constant.OFF:
            return { Bulb: "OFF" }

        default:
            return state
    }
}

