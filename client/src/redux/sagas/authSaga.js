import axios from 'axios';
import { all, call, put, takeEvery, fork } from 'redux-saga/effects';
import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_FAILURE
} from '../types';

// Login

const loginUserAPI = (loginData) => {
    console.log(loginData,'loginData');

    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }
    return axios.post('api/auth', loginData, config);
}

function* loginUser(loginaction) {
    try {
        const result = yield call(loginUserAPI, loginaction.payload)

        console.log(result)

        yield put({
            type: LOGIN_SUCCESS,
            payload: result.data,
        })
    }catch(e){
        yield put({
            type: LOGIN_FAILURE,
            payload: e.response,
        })
    }
}

function* watchLoginUser() {
    yield takeEvery(LOGIN_REQUEST, loginUser)
}

// Logout

function* logoutUser(loginaction) {
    try {
        const result = yield call(loginUserAPI, loginaction.payload)

        console.log(result)

        yield put({
            type: LOGOUT_SUCCESS,
        })
    }catch(e){
        yield put({
            type: LOGOUT_FAILURE,
        })
        console.log(e);
    }
}

function* watchlogoutUser() {
    yield takeEvery(LOGOUT_REQUEST, logoutUser)
}

export default function* authSaga(){
    yield all([
        fork(watchLoginUser),
        fork(watchlogoutUser),
    ])
}
