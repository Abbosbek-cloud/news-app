import {
  NEWS_FETCHED,
  NEWS_FETCHED_ERROR,
  NEWS_FETCHING,
  NEWS_FETCH_DELETE,
  NEWS_FETCH_UPDATE,
} from "../actionTypes";

const initialState = {
  news: [],
  newsLoadingStatus: "abek",
};

const newsReducer = (state = initialState, action) => {
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
        news: [...state.news.filter((item) => item.id !== action.payload)],
      };
    default:
      return state;
  }
};

export default newsReducer;
