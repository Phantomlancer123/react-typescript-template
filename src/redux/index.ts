import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { actions, slices } from "./slices";

import { Reducer } from "react";
import { appSaga, appSagaActions } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const combinedReducers = combineReducers(slices);

interface AppState {
}

interface AppAction {
  type: string;
  payload: any;
}

const rootReducer: Reducer<AppState, AppAction> = (state: AppState, action: AppAction) => {
  return {
    ...state,
  }
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [],
      },
    }).concat(sagaMiddleware),
  devTools: true,
});

sagaMiddleware.run(appSaga);

export { actions };
export const sagaActions = appSagaActions;
export default store;
