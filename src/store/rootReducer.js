import authReducer from './reducer/authReducer';
import appReducer from './reducer/appReducer';
import cartReducer from './reducer/cartReducer';

const rootReducer = {
  auth: authReducer,
  app: appReducer,
  cart: cartReducer,
};

export default rootReducer;
