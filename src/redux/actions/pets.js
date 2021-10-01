import {
  GET_PETS_START, GET_PETS_SUCC, GET_PETS_FAIL, SET_CANT_PETS_FOR_PAGINATION,
  GET_PETS_PAGINATION_START, GET_PETS_PAGINATION_SUCC, GET_PETS_PAGINATION_FAIL,
} from '../types';
import clientAxios from '../../config/axios';

export function getAllPetsAction() {
  return async (dispatch) => {
    dispatch(getAllPets())

    try {
      const res = await clientAxios.get('/pets');

      const cantPets = res.data.length;
      let cantPags;

      if (cantPets < 4) {
        cantPags = 1
      } else {
        cantPags = cantPets / 4;
      }

      dispatch(setCantPagination(Math.ceil(cantPags)))
      dispatch(getAllPetsSucc(res.data));

    } catch (error) {
      dispatch(getAllPetsErr())
    }
  }

}

const getAllPets = () => ({
  type: GET_PETS_START,
  payload: true
})

const getAllPetsSucc = (pets) => ({
  type: GET_PETS_SUCC,
  payload: pets
})

const getAllPetsErr = () => ({
  type: GET_PETS_FAIL,
  payload: true
})

export function getPetsPaginationAction(start) {
  return async (dispatch) => {
    dispatch(getPetsPagination())

    try {
      const res = await clientAxios.get(`/pets?_limit=4&_start=${start}`);
      dispatch(getPetsPaginationSucc(res.data));
    } catch (error) {
      dispatch(getPetsPaginationErr())
    }
  }

}

const getPetsPagination = () => ({
  type: GET_PETS_PAGINATION_START,
  payload: true
})

const getPetsPaginationSucc = (pets) => ({
  type: GET_PETS_PAGINATION_SUCC,
  payload: pets
})

const getPetsPaginationErr = () => ({
  type: GET_PETS_PAGINATION_FAIL,
  payload: true
})

const setCantPagination = (cantPags) => ({
  type: SET_CANT_PETS_FOR_PAGINATION,
  payload: cantPags
})
