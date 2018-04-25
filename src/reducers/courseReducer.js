
export default (state = [], action) => {

  switch(action.type) {
    case 'CREATE_COURSE':

      // bad mutable way
      // state.push(action.course);
      // return state;

      // good immutable way
      return [...state, Object.assign({}, action.course)];
    
    default: 
      return state;
  }
};