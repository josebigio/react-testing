import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  comments: (state = ['a','v','c']) => state
});

export default rootReducer;
