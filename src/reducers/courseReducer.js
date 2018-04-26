import { LOAD_COURSES_SUCCESS } from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.courses, action) => {

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