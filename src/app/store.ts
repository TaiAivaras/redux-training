import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import counterReducer from '../features/counter/counterSlice';
import {counterSagas} from "../features/counter/counterSagas";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(counterSagas)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
