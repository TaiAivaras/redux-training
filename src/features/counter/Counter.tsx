import React from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {decrement, increment, incrementAsyncStart, selectCount, selectStatus} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
    const count = useAppSelector(selectCount);
    const status = useAppSelector(selectStatus);

    const dispatch = useAppDispatch();

    return (
        <div>
            Status: {status}
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>

            </div>
            <button
                className={styles.button}
                aria-label="Increment value"
                onClick={() => dispatch(incrementAsyncStart())}
            >
                Increment Async
            </button>
        </div>
    );
}
