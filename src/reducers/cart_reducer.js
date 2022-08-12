import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const tempItem = state.cart.find((p) => p.id === id + color);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return {
        ...state,
        cart: tempCart,
      };
    } else {
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: id + color,
            name: product.name,
            color,
            amount,
            image: product.images[0].url,
            price: product.price,
            max: product.stock,
          },
        ],
      };
    }
  }
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === REMOVE_CART_ITEM) {
    const newcart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: newcart,
    };
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }

        if (value === "dec") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === COUNT_CART_TOTALS) {
    const newAmountTotal = state.cart.reduce(
      (total, currentValue) =>
        (total = total + currentValue.price * currentValue.amount),
      0
    );
    const newItemTotal = state.cart.reduce(
      (total, currentValue) => (total = total + currentValue.amount),
      0
    );

    return {
      ...state,
      total_items: newItemTotal,
      total_amount: newAmountTotal,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
