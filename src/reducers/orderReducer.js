var defaultState = {
  orderStatus: 'INACTIVE', // INACTIVE, OPENED, CLOSED
  orderItems: []
};
export default function(state=defaultState, action){
  switch (action.type) {
    case "START_ORDER":
      console.log('startOrder->newState', {...state, orderStatus: 'OPENED'})
      return {...state, orderStatus: 'OPENED'};
  }
  return state;
}
