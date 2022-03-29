export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WISHLIST":
      return {
        ...state,
        wishlist: [action.payload, ...state.wishlist]
      };
    default:
      return state;
  }
};
