import {
  FILTERE_FETCH_ERROR,
  FILTER_FETCHED,
  FILTER_FETCHING,
  ACTIVE_FILTER_CHANGED,
} from "../actionTypes";

const initialState = {
  filter: [],
  filterLoadingStatus: "abek",
  activeFilter: "all",
};

const filterNews = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_FETCHING:
      return {
        ...state,
        filterLoadingStatus: "loading",
      };
    case FILTER_FETCHED:
      return {
        ...state,
        filter: action.payload,
        filterLoadingStatus: "abek",
      };
    case FILTERE_FETCH_ERROR:
      return {
        ...state,
        filterLoadingStatus: "error",
      };
    case ACTIVE_FILTER_CHANGED:
      return {
        ...state,
        activeFilter: action.payload,
      };
    default:
      return state;
  }
};

export default filterNews;
