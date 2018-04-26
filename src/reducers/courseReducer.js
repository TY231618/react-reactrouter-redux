import { CREATE_COURSE } from '../actions/actionTypes';
export default (state = [], action) => {

  switch(action.type) {
    case CREATE_COURSE:

      // debugger;
      // bad mutable way
      // state.push(action.course);
      // return state;

      // good immutable way
      return [...state, Object.assign({}, action.course)];
    
    default: 
      return state;
  }
};