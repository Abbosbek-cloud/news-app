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
  filteredNews: [],
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
        filteredNews:
          state.activeFilter === "all"
            ? action.payload
            : action.payload.filter(
                (item) => item.category === state.activeFilter
              ),
        newsLoadingStatus: "",
      };

    case NEWS_FETCHED_ERROR:
      return {
        ...state,
        newsLoadingStatus: "error",
      };
    case NEWS_FETCH_UPDATE:
      const newItem = [...state.news, action.payload];
      return {
        ...state,
        news: newItem,
        filteredNews:
          state.activeFilter === "all"
            ? newItem
            : newItem.filter((item) => item.category === state.activeFilter),
      };
    case NEWS_FETCH_DELETE:
      const newList = [
        ...state.news.filter((item) => item.id !== action.payload),
      ];
      return {
        ...state,
        news: newList,
        filteredNews:
          state.activeFilter === "all"
            ? newList
            : newList.filter((item) => item.category === state.activeFilter),
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
        filteredNews:
          action.payload === "all"
            ? state.news
            : state.news.filter((item) => item.category === action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
