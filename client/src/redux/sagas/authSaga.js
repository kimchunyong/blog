import axios from 'axios';
import { all, call, put, takeEvery, fork } from 'redux-saga/effects';
import {
    USER_LOADING_SUCCESS,
    USER_LOADING_FAILURE,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_FAILURE, USER_LOADING_REQUEST,
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

function* logout(action) {
    console.log('logout',action)
    try {
        yield put({
            type: LOGOUT_SUCCESS,
        });
    } catch (e) {
        yield put({
            type: LOGOUT_FAILURE,
        });
    }
}

function* watchlogout() {
    yield takeEvery(LOGOUT_REQUEST, logout);
}

// User Loading

const userLoadingAPI = (token) => {
    console.log(token);

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    if (token) {
        config.headers["x-auth-token"] = token;
    }
    return axios.get("api/auth/user", config);
};

function* userLoading(action) {
    try {
        console.log(action, "userLoading");
        const result = yield call(userLoadingAPI, action.payload);
        yield put({
            type: USER_LOADING_SUCCESS,
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: USER_LOADING_FAILURE,
            payload: e.response,
        });
    }
}

function* watchuserLoading() {
    yield takeEvery(USER_LOADING_REQUEST, userLoading);
}

export default function* authSaga(){
    yield all([
        fork(watchLoginUser),
        fork(watchlogout),
        fork(watchuserLoading),
    ])
}
