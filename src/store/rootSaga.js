import "regenerator-runtime/runtime";

import { all } from "redux-saga/effects";

import { watchRequest } from "../api/watchRequest";
import { loadCart, loadingWatcher } from "./loadCartSaga";

function* rootSaga() {
  yield all([watchRequest(), loadingWatcher(), loadCart()]);
}
export default rootSaga;
