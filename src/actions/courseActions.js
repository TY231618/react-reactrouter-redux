import { LOAD_COURSES_SUCCESS } from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {

  return {
    type: LOAD_COURSES_SUCCESS,
    courses: courses
  };
}

export function loadCourses() {

  return function(dispatch) {
    return courseApi.getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(err => {
        throw(err);
      });
  };
}