import { ADD_ADRESS, GET_ADRESS, CHANGE_ACTIVE_ADRESS, DELETE_ADRESS } from '../action';

export default function(state = {}, action) {
  switch(action.type) {
    case GET_ADRESS:
      return {
        adressList: action.state,
        activeAdress: Boolean(action.state.length) ? action.state[0].title : 'Kyiv'
      };

    case ADD_ADRESS:
      let activeAdress;
      if(action.state.length === 0) window.location.href = '/';
      
      if(action.current) {
        activeAdress = action.state[0].title; // Если был добавлен текущий адрес, тогда он становится активным
      } else {
        activeAdress = action.state.length !== state.adressList.length ? action.state[action.state.length - 1].title : action.adress
      }; // Проверяет, был ли добавлен адрес. Если нет, активным становится тот, который ввели. Если да, активным становится последний.
      return {
        adressList: action.state,
        activeAdress
      };

    case DELETE_ADRESS:
      return {
        adressList: action.state,
        activeAdress: action.state[0].title
      };

    case CHANGE_ACTIVE_ADRESS:
      return {...state, activeAdress: action.adress};

    default:
      return {...state, activeAdress: 'Kyiv'};
  }
}
