import {
  LOGIN_SUCC, LOGIN_FAIL, CLEAN_ALERT
} from '../types';
import clientAxios from '../../config/axios';

export function loginAction(data) {
  return async (dispatch) => {

    try {
      const res = await clientAxios.post('/auth/local', data);
      dispatch(loginSucc(res.data))

      setTimeout(()=> {
        dispatch(cleanAlert())
      }, 3000)

    } catch (error) {
      dispatch(loginFail(error.message))

      setTimeout(()=> {
        dispatch(cleanAlert())
      }, 3000)
    }
  }

}

const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error
})

const loginSucc = (data) => ({
  type: LOGIN_SUCC,
  payload: data
})

const cleanAlert = () => ({
  type: CLEAN_ALERT
})

// export function userAutenticated(token) {
//   return async (dispatch) => {

//     try {
//       const res = await clientAxios.post('/auth/local', data);
//       console.log(res.data)
//       dispatch(loginSucc(res.data))

//     } catch (error) {
//       dispatch(loginFail())
//     }
//   }

// }
