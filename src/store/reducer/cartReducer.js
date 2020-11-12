import { ADD_TO_CART, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from 'constant/types';
import { addItemToCart, removeItemFromCart } from 'store/utils/cartUtils';

const initState = {
  cartItems: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id
        ),
      };
    default:
      return state;
  }
};
