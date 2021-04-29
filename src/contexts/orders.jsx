import { createContext, useReducer } from "react";

const OrderStateContext = createContext();
const OrderDispatchContext = createContext();

function OrderReducer(state, action) {
  return state;
}

export function OrderProvider({ children }) {
  const [state, dispatch] = useReducer(OrderReducer, {});

  return (
    <OrderStateContext.Provider value={state}>
      <OrderDispatchContext.Provider value={dispatch}>
        {children}
      </OrderDispatchContext.Provider>
    </OrderStateContext.Provider>
  );
}

function useOrderState() {}
