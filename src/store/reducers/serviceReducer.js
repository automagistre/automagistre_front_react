import {SET_MANUFACTURE, SET_SERVICE} from "../actions/actionsTypes";
import {carManufactures} from "../../vars/manufactures";


const initialState = {
    manufactures: carManufactures,
    manufacture: '',
    serviceType: ''
}

export default function serviceReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MANUFACTURE:
            return {...state, manufacture: action.manufacture.toLowerCase()}
        case SET_SERVICE:
            return {...state, serviceType: action.serviceType.toLowerCase()}
        default:
            return state
    }
}