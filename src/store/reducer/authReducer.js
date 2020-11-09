import { LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGN_UP_SUCCESS } from 'constant/types';

const initState = {
  currentUser: null,
  token: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: payload.user,
        token: payload.token,
      };
    case LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
};
