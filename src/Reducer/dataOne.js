import * as Constant from '../Constant'
 const initialState = {
    data:{
    On: false,
    text: "IamWorking"
    }

}
export default (state = initialState,{ type }) => {
    switch (type) {
        case Constant.ACTIVATE:
            return { 
                On: true,
            }
        case Constant.DEACTIVATE:
            return { 
                On: false,
            }
        default:
            return state
    }
}


