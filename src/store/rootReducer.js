import authReducer from './reducer/authReducer';
import appReducer from './reducer/appReducer';

const rootReducer = {
  auth: authReducer,
  app: appReducer,
};

export default rootReducer;
