import {combineReducers} from 'redux';
import GitReducer from './gitReducer.js';
import ActiveRepo from './activeReducer.js';
import MenuReducer from './menuReducer.js';
import RestaurantReducer from './restaurantReducer.js';
import OrderReducer from './orderReducer.js';

const allReducers= combineReducers({
  repos: GitReducer,
  menus: MenuReducer,
  orders: OrderReducer,
  restaurantInfo: RestaurantReducer,
  activeRepo: ActiveRepo
});
export default allReducers;
