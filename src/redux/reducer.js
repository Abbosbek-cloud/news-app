import {
  FILTERE_FETCH_ERROR,
  FILTER_FETCHED,
  FILTER_FETCHING,
  NEWS_FETCHED,
  NEWS_FETCHED_ERROR,
  NEWS_FETCHING,
  NEWS_FETCH_DELETE,
  NEWS_FETCH_UPDATE,
  ACTIVE_FILTER_CHANGED,
} from "./actionTypes";

const initialState = {
  news: [],
  newsItemsTodAdd: [],
  newsLoadingStatus: "abek",
  filter: [],
  filterLoadingStatus: "abek",
  activeFilter: "all",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_FETCHING:
      return {
        ...state,
        newsLoadingStatus: "loading",
      };
    case NEWS_FETCHED:
      return {
        ...state,
        news: action.payload,
        newsLoadingStatus: "",
      };

    case NEWS_FETCHED_ERROR:
      return {
        ...state,
        newsLoadingStatus: "error",
      };
    case NEWS_FETCH_UPDATE:
      return {
        ...state,
        news: [...state.news, action.payload],
      };
    case NEWS_FETCH_DELETE:
      return {
        ...state,
        news: state.news.filter((item) => item.id !== action.payload),
      };
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

export default reducer;
