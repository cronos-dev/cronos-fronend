var defaultState = {
  restaurantId: '',
  tableId: ''
};
export default function(state=defaultState, action){
  switch (action.type) {
    case "RESTAURANT_SCANNED":
      restaurantInfo = action.payload
      console.log('restaurantInfo', restaurantInfo);
      return restaurantInfo;
  }
  return state;
}
