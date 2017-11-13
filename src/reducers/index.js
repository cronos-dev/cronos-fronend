import {combineReducers} from 'redux';
import GitReducer from './gitReducer.js';
import ActiveRepo from './activeReducer.js';
import MenuReducer from './menuReducer.js';
const allReducers= combineReducers({
  repos: GitReducer,
  menus: MenuReducer,
  activeRepo: ActiveRepo
});
export default allReducers;
