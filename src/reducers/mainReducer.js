var defaultState = {
  restaurantId: '',
  tableId: '',
  orderStatus: 'INACTIVE', // INACTIVE, OPENED, CLOSED
  orderItems: {} // { id: quantity }
};
export default function(state=defaultState, action){
  switch (action.type) {
    case "START_ORDER":
      console.log('startOrder', {...state, orderStatus: 'OPENED'})
      return {...state, orderStatus: 'OPENED'};
    case "ADD_ITEM_TO_ORDER":
      itemId = action.payload.itemId;
      newQuantity = action.payload.quantity;
      newState = {...state};
      newState.orderItems[itemId] = newQuantity;
      console.log('addOrder', newState);
      return newState;
    case "REMOVE_ITEM_FROM_ORDER":
      itemId = action.payload.itemId;
      newQuantity = action.payload.quantity;
      newState = {...state};
      newState.orderItems[itemId] = newQuantity;
      console.log('removeOrder', newState);
      return newState;
    case "RESTAURANT_SCANNED":
      console.log('restaurantScanned', action.payload);
      return {...state, ...action.payload, orderItems: {}};
  }
  return state;
}
