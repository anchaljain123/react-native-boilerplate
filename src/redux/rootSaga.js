import { all } from 'redux-saga/effects';
import { bankSagas } from './common/bank/bank.sagas';

export default function* rootSaga() {
    try {
        yield all([
            // bankSagas()
        ])
    } catch (error) {
        console.log('saga error: ', error);
    }
}