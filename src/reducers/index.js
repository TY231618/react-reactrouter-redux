import { combineReducers } from 'redux';
import CourseReducer from './courseReducer';
import AuthorReducer from './authorReducer';
import AjaxCallsInProgressReducer from './ajaxStatusReducer';

const rootReducer = combineReducers({
  authors: AuthorReducer,
  courses: CourseReducer,
  ajaxCallsInProgressReducer: AjaxCallsInProgressReducer
});

export default rootReducer;