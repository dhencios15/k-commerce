import { ADD_TO_CART, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from 'constant/types';

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const removeItem = (payload) => ({
  type: REMOVE_ITEM,
  payload,
});

export const clearItemFromCart = (payload) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload,
});
