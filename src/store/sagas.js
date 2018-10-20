import { takeEvery, put } from 'redux-saga/effects'
import actionType from './actionType'
import axios from 'axios'
import { getInitTodoListAction } from './actionCreator'

function* sagas() {
  yield takeEvery(actionType.GET_LIST_INIT, getListInit);
}

function* getListInit() {

  try {
    const res = yield axios.get('/api/todolist')
    const action = getInitTodoListAction(res.data)
    yield put(action)
  } catch (ex) {
    console.log(ex);
  }

}
export default sagas;