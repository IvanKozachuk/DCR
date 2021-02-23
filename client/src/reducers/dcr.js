export default (dcrs = [], action) => {
  switch(action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...dcrs, action.payload];
    default:
      return dcrs;
  }
}