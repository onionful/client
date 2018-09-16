import { fromJS } from 'immutable';
import typeToReducer from 'type-to-reducer';
import * as types from './types';

const initialState = fromJS({
  transparentHeader: true,
});

export default typeToReducer(
  {
    [types.SET_TRANSPARENT_HEADER]: (state, { payload }) => state.set('transparentHeader', payload),
  },
  initialState,
);
