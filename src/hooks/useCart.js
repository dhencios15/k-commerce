import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  clearItemFromCart,
  removeItem,
} from 'store/actions/cartActions';

const useCart = () => {
  const dispatch = useDispatch();

  const incQty = useCallback(
    (product) => {
      dispatch(addToCart(product));
    },
    [dispatch]
  );

  const decQty = useCallback(
    (product) => {
      dispatch(removeItem(product));
    },
    [dispatch]
  );

  const removeItemFromCart = useCallback(
    (product) => {
      dispatch(clearItemFromCart(product));
    },
    [dispatch]
  );

  return {
    incQty,
    decQty,
    removeItemFromCart,
  };
};

export default useCart;
