import { createReducer } from '@reduxjs/toolkit';
import * as types from './contactsTypes';

const initialState = {
  items: [],
  filtratedItems: [],
  contactExist: false,
};

const contactsReducer = createReducer(initialState, {
  [types.ADD_CONTACT]: (state, { payload }) => ({
    ...state,
    items: [...state.items, payload.item],
  }),
  [types.DELETE_CONTACT]: (state, { payload }) => ({
    ...state,
    items: state.items.filter(item => item.id !== payload.id),
  }),
  [types.FILTRATE_CONTACTS]: (state, { payload }) => ({
    ...state,
    filtratedItems: state.items.filter(item =>
      item.name.toLowerCase().includes(payload.filter.toLowerCase()),
    ),
  }),
  [types.SET_EXISTING]: (state, { payload }) => ({
    ...state,
    contactExist: payload,
  }),
});

export default contactsReducer;
