import { call, put, takeEvery } from 'redux-saga/effects'
import API from 'core/client'
import { increment, decrement, reachedMax, reachedMin, reset } from './actions'

function* incrementRequest() {
    try {
        yield call(API.increment);
        yield put(increment())
    } catch {
        yield put(reachedMax())
    }
}

function* decrementRequest() {
    try {
        yield call(API.decrement);
        yield put(decrement())
    } catch {
        yield put(reachedMin())
    }
}


function* resetRequest() {
    yield call(API.reset);
    yield put(reset())
}

export function* watchIncrement() {
    yield takeEvery('INCREMENT_REQUESTED', incrementRequest)
}

export function* watchDecrement() {
    yield takeEvery('DECREMENT_REQUESTED', decrementRequest)
}

export function* watchReset() {
    yield takeEvery('RESET_REQUESTED', resetRequest)
}