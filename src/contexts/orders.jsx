import { createContext, useReducer, useContext } from "react";
import { append, filter, map } from "ramda";

const OrderStateContext = createContext();
const OrderDispatchContext = createContext();

function OrderReducer(state, action) {
  if (action.type === "add") {
    const { name } = action.payload;

    return {
      ...state,
      [name]: append(
        {
          id: btoa(performance.now()),
          sugar: 50,
          ice: 50,
        },
        state[name]
      ),
    };
  }

  if (action.type === "update") {
    const { name, id, ...rest } = action.payload;

    return {
      ...state,
      [name]: map((order) => (order.id === id ? { ...order, ...rest } : order))(
        state[name]
      ),
    };
  }

  if (action.type === "remove") {
    const { name, id } = action.payload;

    return {
      ...state,
      [name]: filter((order) => order.id !== id)(state[name]),
    };
  }

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

export function useOrderState() {
  const context = useContext(OrderStateContext);

  if (!context) {
    throw new Error("useOrderState must be used within a OrderProvider");
  }

  return context;
}

export function useOrderDispatch() {
  const context = useContext(OrderDispatchContext);

  if (!context) {
    throw new Error("useOrderDispatch must be used within a OrderProvider");
  }

  return context;
}

export function useOrder() {
  return [useOrderState(), useOrderDispatch()];
}
