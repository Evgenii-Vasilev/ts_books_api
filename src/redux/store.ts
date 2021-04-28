import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import bookReducer from './bookReducer';

export const store = createStore(bookReducer, applyMiddleware(thunk));
