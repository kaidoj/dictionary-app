/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as toastrReducer } from 'react-redux-toastr';
import history from 'utils/history';
import { dictionaries as dictionariesReducer } from './components/Dictionaries/reducers';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    toastr: toastrReducer,
    dictionaries: dictionariesReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
