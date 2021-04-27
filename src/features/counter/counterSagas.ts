import {call, delay, put, race, takeEvery} from "@redux-saga/core/effects";
import {incrementAsyncFail, incrementAsyncStart, incrementAsyncSuccess} from "./counterSlice";
import {fetchCount} from "./counterAPI";

function* apiIncrement() {
    try {
        const {result} = yield race({
            result: call(fetchCount, 2, 2000),
            timeout: delay(3000),
        })

        console.log(result)


        if (result) {
            yield put({
                type: incrementAsyncSuccess.type,
                payload: result.data
            })
        } else {
            yield put({
                type: incrementAsyncFail.type,
            })
        }


    } catch (e) {
        yield put({
            type: incrementAsyncFail.type,
        })
    }


}

export function* counterSagas() {
    yield takeEvery(incrementAsyncStart.type, apiIncrement)
}
