import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemID = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemID >= 0) {
        state.cart[itemID] = {
          ...state.cart[itemID],
          quantity: state.cart[itemID].quantity + 1,
        };
      } else {
        let tempItemID = { ...action.payload, quantity: 1 };
        state.cart.push(tempItemID);
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
      });
    },
    decreaseQuantity: (state, { payload }) => {
      const itemIndex = state.cart.findIndex((item) => item.id === payload.id);

      if (state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity -= 1;
      } else if (state.cart[itemIndex].quantity === 1) {
        const nextCartItems = state.cart.filter(
          (item) => item.id !== payload.id
        );
        state.cart = nextCartItems;
      }
    },
    calculateTotal: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.quantity * item.price;
      });

      state.total = total;
    },
  },
});

export const { addToCart, removeItem, decreaseQuantity, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
