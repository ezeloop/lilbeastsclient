import {
  LOGIN_SUCC, LOGIN_FAIL, LOGOUT, LOGIN_USER_DATA, CLEAN_ALERT
} from '../types';

const initialState = {
  token: null,
  error: false,
  loading: false,
  autenticated: false,
  user: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case LOGIN_USER_DATA:
          return {
              ...state,
              user: action.payload,

          }

      case LOGIN_FAIL:
          return {
              ...state,
              loading: false,
              error: action.payload
          }

      case LOGIN_SUCC:
          return {
              ...state,
              loading: false,
              error: null,
              autenticated: true,
              token: action.payload
          }
      case LOGOUT:
          return {
              ...state,
              loading: false,
              error: false,
              user: null,
              token: null,
          }
      case CLEAN_ALERT:
          return {
              ...state,
              error: null
          }

      default:
          return state;
  }
}