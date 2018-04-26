import { combineReducers } from 'redux';
import CourseReducer from './courseReducer';
import AuthorReducer from './authorReducer';
import Reducer from './courseReducer';

const rootReducer = combineReducers({
  authors: AuthorReducer,
  courses: CourseReducer
});

export default rootReducer;