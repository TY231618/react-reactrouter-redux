import authorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadAuthorSuccess(authors) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors: authors
  };
}

export function loadAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return authorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorSuccess(authors));
      })
      .catch(err => {
        throw (err);
      });
  };
}