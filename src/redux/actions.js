import { toast } from "react-toastify";
import {
  ACTIVE_FILTER_CHANGED,
  FILTERE_FETCH_ERROR,
  FILTER_FETCHED,
  FILTER_FETCHING,
  NEWS_FETCHED,
  NEWS_FETCHED_ERROR,
  NEWS_FETCHING,
  NEWS_FETCH_DELETE,
  NEWS_FETCH_UPDATE,
} from "./actionTypes";

export const newsFetch = (request) => (dispatch) => {
  dispatch(NEWS_FETCHING);
  request("http://localhost:3001/news")
    .then((data) => dispatch(actionFetched(data)))
    .catch(() => dispatch(NEWS_FETCHED_ERROR));
};

export const newsDeleteFetch = (request, id) => (dispatch) => {
  request(`http://localhost:3001/news/${id}`, "DELETE")
    .then(dispatch(newsDelete(id)))
    .catch((err) => dispatch(NEWS_FETCHED_ERROR));
  toast.error("News was removed", {
    autoClose: 2000,
  });
};

export const filterFetch = (request) => (dispatch) => {
  dispatch(filterFetching());
  request("http://localhost:3001/filter")
    .then((data) => {
      dispatch(filterFetched(data));
    })
    .catch((err) => dispatch(filterFetchError(err)));
};

export const actionFetching = () => {
  return {
    type: NEWS_FETCHING,
  };
};

export const actionFetched = (news) => {
  return {
    type: NEWS_FETCHED,
    payload: news,
  };
};

export const actionFetchingError = () => {
  return {
    type: NEWS_FETCHED_ERROR,
  };
};

export const newsAdd = (news) => {
  return {
    type: NEWS_FETCH_UPDATE,
    payload: news,
  };
};

export const newsDelete = (id) => {
  return {
    type: NEWS_FETCH_DELETE,
    payload: id,
  };
};

export const filterFetching = () => {
  return {
    type: FILTER_FETCHING,
  };
};

export const filterFetched = (filter) => {
  return {
    type: FILTER_FETCHED,
    payload: filter,
  };
};

export const filterFetchError = () => {
  return {
    type: FILTERE_FETCH_ERROR,
  };
};

export const activeFilteredChange = (filterNews) => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: ACTIVE_FILTER_CHANGED,
      payload: filterNews,
    });
  }, 1000);
};
