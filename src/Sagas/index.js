import {all, fork} from 'redux-saga/effects';

import {watchFindLocationSaga} from './FindLocationSaga';

export function* rootSaga() {
  yield all([
    fork(watchFindLocationSaga),

  ]);
}