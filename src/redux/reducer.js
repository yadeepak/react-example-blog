const initialState = [];

export function blogs(state = initialState, action) {
  console.log(state, action);
  if (action.type === "ADD_BLOG") {
    state = [...state, action.payload];
    return state;
  }
  if (action.type === "REMOVE_BLOG") {
    state = action.payload;
    return state;
  }
  return state;
}
