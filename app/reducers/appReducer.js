import types from './types';

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case types.DRAWER_ITEM_PRESS: {
      const id = action.payload.id;
      if (state.drawerSelected === id) {
        return {...state, drawerSelected: null};
      }
      return {...state, drawerSelected: id};
    }
    case types.LOGIN: {
      return {...state, auth: action.payload.data};
    }
    case types.LOGOUT: {
      return {...state, auth: {}};
    }
    case types.EDIT_PROFILE: {
      const auth = state.auth;
      auth.hobbie = action.payload.hobbie;
      auth.genero_musical = action.payload.music;
      auth.comida_favorita = action.payload.foot;
      auth.celular = action.payload.phone;
      return {...state, auth};
    }
    case types.ADD_NOTIFICATION: {
      const notifications = state.notifications;
      notifications.push(action.payload);
      return {...state, notifications};
    }
    case types.DELETE_NOTIFICATIONS: {
      return {...state, notifications: []};
    }
    default:
      return state;
  }
};

export default appReducer;
