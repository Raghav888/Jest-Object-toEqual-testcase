import cartReducer from "./cart.reducer";

describe("testing cart", () => {
  it("should add to cart when a value is added", () => {
    const initialState = {
      items: [],
      totalPrice: 0,
      totalQuantity: 0
    };
    const action = {
      type: "ADD_TO_CART",
      payload: { item: { name: "Raghav", price: 100 } }
    };

    const state = cartReducer(initialState, action);
    expect(state).toEqual({
      items: [{ name: "Raghav", price: 100 }],
      totalPrice: 100,
      totalQuantity: 1
    });
  });
});
