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

export const activeFilteredChange = (filterNews) => {
  return {
    type: ACTIVE_FILTER_CHANGED,
    payload: filterNews,
  };
};
