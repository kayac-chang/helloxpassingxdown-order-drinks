import { createContext, useReducer, useContext, useCallback } from "react";
import { append, filter, map, slice } from "ramda";
import { createOrder } from "../api";

const OrderStateContext = createContext();
const OrderDispatchContext = createContext();

function useThunkReducer() {
  const [state, dispatch] = useReducer(OrderReducer, {});

  const enhanceDispatch = useCallback((prop) => {
    if (typeof prop === "function") {
      return prop(dispatch);
    }

    return dispatch(prop);
  }, []);

  return [state, enhanceDispatch];
}

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

    const apply = id ? filter((order) => order.id !== id) : slice(0, -1);

    return {
      ...state,
      [name]: apply(state[name]),
    };
  }

  if (action.type === "submit") {
    return {};
  }

  return state;
}

export function SubmitAction(orders) {
  const payload = Object.entries(orders)
    .map(([name, orders]) =>
      orders.map(({ sugar, ice }) => ({ name, sugar, ice }))
    )
    .flat();

  return (dispatch) =>
    createOrder(payload).then((res) => {
      dispatch({ type: "submit" });

      return res;
    });
}

export function OrderProvider({ children }) {
  const [state, dispatch] = useThunkReducer(OrderReducer, {});

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
