const userDetails = (state = "", action) => {
    switch (action.type) {
      case 'USER':
        return state = action.payload;
      default:
        return state;
    }
  }
  export default userDetails;