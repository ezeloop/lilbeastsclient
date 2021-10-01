import {
    GET_PETS_START, GET_PETS_SUCC, GET_PETS_FAIL, SET_CANT_PETS_FOR_PAGINATION,
    GET_PETS_PAGINATION_START, GET_PETS_PAGINATION_SUCC, GET_PETS_PAGINATION_FAIL
} from '../types';

const initialState = {
    pets: [],
    petsforpage: [],
    error: false,
    loading: false,
    cantPags: null,
}

export const petsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PETS_PAGINATION_START:
        case GET_PETS_START:
            return {
                ...state,
                loading: action.payload,

            }

        case GET_PETS_FAIL:
        case GET_PETS_PAGINATION_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case GET_PETS_SUCC:
            return {
                ...state,
                loading: false,
                error: false,
                pets: action.payload
            }
        case GET_PETS_PAGINATION_SUCC:
            return {
                ...state,
                loading: false,
                error: false,
                petsforpage: action.payload
            }
        case SET_CANT_PETS_FOR_PAGINATION:
            return {
                ...state,
                cantPags: action.payload
            }

        default:
            return state;
    }
}