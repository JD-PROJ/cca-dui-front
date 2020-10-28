import {
  createAction,
  PayloadAction,
  PayloadActionCreator,
} from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';

const FETCH = 'fetch';
const SUCCESS = 'success';
const FAILURE = 'failure';

export const createAsyncAction = <P1, P2, P3>(
  prefix: string,
  action: string,
): CreateAsyncActionReturnType<P1, P2, P3> => {
  const actionPrefix = `${prefix}/${action}`;

  return {
    fetch: createAction<P1>(`${actionPrefix}/${FETCH}`),
    success: createAction<P2>(`${actionPrefix}/${SUCCESS}`),
    failure: createAction<P3>(`${actionPrefix}/${FAILURE}`),
  };
};

type CreateAsyncActionReturnType<P1, P2, P3> = {
  fetch: PayloadActionCreator<P1, string>;
  success: PayloadActionCreator<P2, string>;
  failure: PayloadActionCreator<P3, string>;
};

type RequestFunctionType<P, T> =
  | ((payload: P) => Promise<T>)
  | (() => Promise<T>);

const isPayloadAction = <P>(action: any): action is PayloadAction<P> => {
  return action.payload !== undefined;
};

export const createFetchSagaWorker = <P1, P2, P3>(
  actions: CreateAsyncActionReturnType<P1, P2, P3>,
  request: RequestFunctionType<P1, P2>,
) => {
  return function* (action: PayloadActionCreator<P1, string>) {
    try {
      const result = isPayloadAction<P1>(action)
        ? yield call(request, action.payload)
        : yield call(request);
      yield put(actions.success(result));
    } catch (e) {
      yield put(actions.failure(e));
    }
  };
};
