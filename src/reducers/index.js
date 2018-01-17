import { combineReducers } from 'redux';
import ReducerPosts from './reducer_posts'

const rootReducer = combineReducers({
  posts: ReducerPosts
});

export default rootReducer;
