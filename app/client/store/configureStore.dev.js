import { createStore, compose } from 'redux';
import { rootReducer } from '../reducers';
import DevTools from '../containers/devTools';

const finalCreateStore = compose(
  DevTools.instrument(),
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
