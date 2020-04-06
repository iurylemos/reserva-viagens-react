import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';
//Primeiro reducer

const store = createStore(rootReducer);

export default store;