import { localizeReducer } from 'react-localize-redux';
import { reducer as formReducer } from 'redux-form/immutable';
import { combineReducers } from 'redux-immutable';
import pages from './pages';

export default combineReducers({
  form: formReducer,
  localize: localizeReducer,
  pages,
});
