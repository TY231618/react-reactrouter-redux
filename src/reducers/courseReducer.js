import { LOAD_COURSES_SUCCESS } from '../actions/actionTypes';
export default (state = [], action) => {

  switch(action.type) {
    case LOAD_COURSES_SUCCESS:

      // debugger;
      // bad mutable way
      // state.push(action.course);
      // return state;

      // good immutable way
      return action.courses;
    
    default: 
      return state;
  }
};