import { all } from 'redux-saga/effects'
import { helloSaga, helloSaga2 } from './saga'
export default function* rootSaga() {
    yield all([
        helloSaga(),
        helloSaga2()
    ]);
}
