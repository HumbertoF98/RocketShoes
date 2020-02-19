import { createStore } from 'redux';
import reducer from './modules/cart/reducer';

function cart() {
  return [];
}

const store = createStore(reducer);

export default store;