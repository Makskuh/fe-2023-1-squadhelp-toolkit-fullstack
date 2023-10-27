import { createSlice } from '@reduxjs/toolkit';
import * as restController from '../../api/rest/restController';
import {
  decorateAsyncThunk,
  rejectedReducer,
  createExtraReducers,
} from '../../utils/store';
import * as api from '../../api/rest/restController';

const MODERATOR_SLICE_NAME = 'moderator';

const initialState = {
  isFetching: true,
  offersData: [],
  error: null,
};

export const getAllOffers = decorateAsyncThunk({
  key: `${MODERATOR_SLICE_NAME}`,
  thunk: async (payload) => {
    const { data } = await api.getAllOffers(payload);
    return data;
  },
});

const getAllOffersReducers = createExtraReducers({
  thunk: getAllOffers,
  pendingReducer: (state) => {
    state.isFetching = true;
    state.offersData = [];
    state.error = null;
  },
  fulfilledReducer: (state, { payload: { offers } }) => {
    state.isFetching = false;
    state.offersData = offers;
    state.error = null;
  },
  rejectedReducer,
});

const extraReducers = (builder) => {
  getAllOffersReducers(builder);
};

const moderatorSlice = createSlice({
  name: MODERATOR_SLICE_NAME,
  initialState,
  reducerc: {},
  extraReducers,
});

const { actions, reducer } = moderatorSlice;

export default reducer;
