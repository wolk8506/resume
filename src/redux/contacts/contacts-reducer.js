import { createReducer } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';
import actions from './contacts-actions';

const initialState = {
  value: 0,
};

const items = createReducer([initialState], {
  [actions.language]: (state, action) => [action.payload],
});

export default combineReducers({
  items,
});
