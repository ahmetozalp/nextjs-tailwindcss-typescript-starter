import { Action, applyMiddleware, createStore as _createStore, Store } from 'redux'
import { createWrapper } from "next-redux-wrapper";
import { create } from '../middlewares'
import reducers from '../reducers'

export const middlewares = create(true)

export const createStore = () => _createStore(
  reducers,
  applyMiddleware(...middlewares),
)

export const wrapper = createWrapper(createStore, { debug: true });
