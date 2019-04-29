import {SET_MANUFACTURE} from "./actionsTypes";

export function setManufacture(manufacture) {
    return {
        type: SET_MANUFACTURE,
        manufacture
    }
}