import React, { useCallback, useEffect } from "react";
import { useHttp } from "../hook/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { newsDelete, newsDeleteFetch, newsFetch } from "../redux/actions";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "./Spinner";
import ErrorPage from "./ErrorPage";
import NewsItems from "./NewsItems";
import { toast } from "react-toastify";
import { createSelector } from "reselect";
import { NEWS_FETCHED_ERROR, NEWS_FETCHING } from "../redux/actionTypes";

function NewsList() {
  const filteredSelectedNews = createSelector(
    (state) => state.filterNews.activeFilter,
    (state) => state.newsReducer.news,
    (filterNews, newsReducer) => {
      if (filterNews === "all") {
        return newsReducer;
      } else {
        return newsReducer.filter((s) => s.category === filterNews);
      }
    }
  );

  const filteredNews = useSelector(filteredSelectedNews);

  const filterLoadingStatus = useSelector((state) => state.filterLoadingStatus);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(newsFetch(request));
    // eslint-disable-next-line
  }, []);

  const onDelete = useCallback((id) => {
    dispatch(newsDeleteFetch(request, id));
    // eslint-disable-next-line
  }, []);

  if (filterLoadingStatus === "loading") {
    return <Spinner />;
  } else if (filterLoadingStatus === "error") {
    return <ErrorPage />;
  }

  const newsListChecker = (arr) => {
    if (arr.length < 1) {
      let idArr = arr.map((item) => {
        return item.id;
      });
      return (
        <CSSTransition key={idArr} timeout={500} classNames="item">
          <h3>Nothing not found</h3>
        </CSSTransition>
      );
    }
    return arr
      .map(({ id, ...props }) => {
        return (
          <CSSTransition key={id} timeout={500} classNames="item">
            <NewsItems onDelete={() => onDelete(id)} {...props} />
          </CSSTransition>
        );
      })
      .reverse();
  };

  const element = newsListChecker(filteredNews);
  return <TransitionGroup component="ul">{element}</TransitionGroup>;
}

export default NewsList;
