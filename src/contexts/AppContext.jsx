import React, { createContext, useContext, useMemo, useReducer } from "react"; // =================================================================================

// =================================================================================
const initialState = {
  cart: [
    {
      price: 250,
      name: "Geometric Pattern Tripod",
      imgUrl: "/assets/images/Gift Shop/lamp1.png",
      id: "7222243834583537",
      qty: 1,
    },
    {
      price: 250,
      name: "Tripod Lamp, Psychedelic Art",
      imgUrl: "/assets/images/Gift Shop/lampP11.png",
      id: "38553442244076086",
      qty: 1,
    },
    {
      price: 250,
      name: "Music Table Lamp, Printed Lamp Shades",
      imgUrl:
        "/assets/images/Gift Shop/lampTS2.png",
      id: "9573201630529315",
      qty: 1,
    },
  ],
};
const AppContext = createContext({
  state: initialState,
  dispatch: () => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CART_AMOUNT":
      let cartList = state.cart;
      let cartItem = action.payload;
      let exist = cartList.find((item) => item.id === cartItem.id);

      if (cartItem.qty < 1) {
        const filteredCart = cartList.filter((item) => item.id !== cartItem.id);
        return { ...state, cart: filteredCart };
      } // IF PRODUCT ALREADY EXITS IN CART

      if (exist) {
        const newCart = cartList.map((item) =>
          item.id === cartItem.id ? { ...item, qty: cartItem.qty } : item
        );
        return { ...state, cart: newCart };
      }

      return { ...state, cart: [...cartList, cartItem] };

    default: {
      return state;
    }
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
export default AppContext;
