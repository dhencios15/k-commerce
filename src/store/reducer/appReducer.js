import { AUTH_ERROR, IS_AUTHENTICATING } from 'constant/types';

const initState = {
  isLoading: false,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, { type, payload }) => {
  switch (type) {
    case IS_AUTHENTICATING:
      return {
        ...state,
        isLoading: payload,
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
