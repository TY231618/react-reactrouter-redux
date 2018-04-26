import authorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';

export function loadAuthorSuccess(authors) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors: authors
  };
}

export function loadAuthors() {
  return dispatch => {
    return authorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorSuccess(authors));
      })
      .catch(err => {
        throw (err);
      });
  };
}