import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

export interface CounterState {
    value: number;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
    value: 0,
    status: 'idle',
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementAsyncStart: (state) => {
            state.status = 'loading'
        },
        incrementAsyncSuccess: (state, action) => {
            state.status = 'idle'
            state.value += action.payload;
        },
        incrementAsyncFail: (state) => {
            state.status = 'failed'
        },
    },
});

export const {increment, decrement, incrementAsyncStart, incrementAsyncSuccess, incrementAsyncFail} = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;
export const selectStatus = (state: RootState) => state.counter.status;

export default counterSlice.reducer;
