import {createStore} from 'redux';
import { tokenReducer } from './tokens/tokensReducers';

const store = createStore(tokenReducer);

export default store;