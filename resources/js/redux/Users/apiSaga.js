import {all, call, put, takeLatest} from 'redux-saga/effects'
import actions from '../Users/actions'
import {getRequest} from '../../config/axiosClient'

function* getAllUser() {
  try {
    const response = yield call(() => getRequest('users'));
    yield put({type: actions.GET_ALL_USER_SUCCESS, payload: response.data});
  } catch (error) {
    yield put({type: actions.GET_ALL_USER_FAILURE});
  }
}



export default function* rootSaga() {
  yield all([takeLatest(actions.GET_ALL_USER, getAllUser)]);
}
