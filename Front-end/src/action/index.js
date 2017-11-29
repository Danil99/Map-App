export const ADD_ADRESS = 'ADD_ADRESS';
export const GET_ADRESS = 'GET_ADRESS';
export const CHANGE_ACTIVE_ADRESS = 'CHANGE_ACTIVE_ADRESS';
export const DELETE_ADRESS = 'DELETE_ADRESS';

import axios from 'axios';

let server = 'http://localhost:8080';

export function onGetAdress() {
  return axios.post(`${server}/getAdress`).then(res => res.data)
    .then(state => ({
      type: GET_ADRESS,
      state
    }))
    .catch(err => console.error(err))
}

export function onAddAdress(adress, current = false) {
  return axios.post(`${server}/addAdress`, { adress, current }).then(res => res.data)
    .then(state => ({
      type: ADD_ADRESS,
      state,
      current,
      adress
    }))
    .catch(err => console.error(err))
}

export function onDeleteAdress(id) {
  return axios.put(`${server}/deleteAdress`, { id }).then(res => res.data)
    .then(state => ({
      type: DELETE_ADRESS,
      state
    }))
    .catch(err => console.error(err))
}

export function onChangeActiveAdress(adress) {
  return {
    type: CHANGE_ACTIVE_ADRESS,
    adress
  }
}
