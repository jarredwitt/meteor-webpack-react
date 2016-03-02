import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

const finalCreateStore = compose()(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
