import {call, put, takeLatest} from 'redux-saga/effects';
import {
  FIND_LOCATION_FAIL,
  FIND_LOCATION_SUCCESS,
  FIND_LOCATION_Pending
} from '../Actions/types';

import {findLocation} from '../Actions';
function* findLocationSaga({payload}) {
  yield put(exerciseDetailsPending());
  yield put({type: FIND_LOCATION_Pending});
  try {
    // const {exerciseId} = payload.data;
    // const response = yield call(getExerciseAPI, exerciseId);
    // console.log(response);
    const response='test success'
    yield put({type: FIND_LOCATION_SUCCESS,response});
  } catch (error) {
    yield put({type: FIND_LOCATION_FAIL});
  }
}
export function* watchFindLocationSaga() {
  yield takeLatest(findLocation, findLocationSaga);
}
