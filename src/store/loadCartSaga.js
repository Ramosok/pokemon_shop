import { put, takeEvery } from "redux-saga/effects";

import { LOCAL_STORAGE_KEYS } from "../constants/localStorageData";

import { GET_CART_REQUEST } from "../pages/Cart/actions";
import { SIGN_IN_SUCCESS } from "../commonComponents/Login/actions";

export function* loadCart() {
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  if (token) {
    yield put(GET_CART_REQUEST());
  }
}

export function* loadingWatcher() {
  yield takeEvery(SIGN_IN_SUCCESS, loadCart);
}
