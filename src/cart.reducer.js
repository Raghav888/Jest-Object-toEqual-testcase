export const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload.item],
        totalPrice: state.totalPrice + action.payload.item.price,
        totalQuantity: state.totalQuantity + 1
      };

    default:
      break;
  }
}

export default cartReducer;
