import { CREATE_COURSE } from './actionTypes';

export function createCourse(course) {

  // debugger;
  return {
    type: CREATE_COURSE,
    course: course
  };
}