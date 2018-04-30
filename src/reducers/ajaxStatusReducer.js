import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
  console.log('actionTypeEndsInSuccess', type);
  return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {

  if(action.type === types.BEGIN_AJAX_CALL) {
    console.log('ajaxStatusReducer ++++', state);
    return state + 1;
  } else if(actionTypeEndsInSuccess(action.type)) {
    console.log('ajaxStatusReducer ----', state);
    return state - 1;
  }
  return state;
}