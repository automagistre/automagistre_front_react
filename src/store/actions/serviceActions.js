import {SET_MANUFACTURE, SET_SERVICE} from "./actionsTypes";

export function setManufacture(manufacture) {
    return {
        type: SET_MANUFACTURE,
        manufacture
    }
}

export function setServiceType(serviceType) {
    return {
        type: SET_SERVICE,
        serviceType
    }
}