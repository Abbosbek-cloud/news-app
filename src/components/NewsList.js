import React, { useCallback, useEffect } from "react";
import { useHttp } from "../hook/useHttp";
import { useDispatch, useSelector } from "react-redux";
import {
  actionFetchingError,
  actionFetching,
  actionFetched,
  newsDelete,
} from "../redux/actions";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "./Spinner";
import ErrorPage from "./ErrorPage";
import NewsItems from "./NewsItems";
import { toast } from "react-toastify";

function NewsList() {
  const { filteredNews, filterLoadingStatus } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(actionFetching());
    request("http://localhost:3001/news")
      .then((data) => dispatch(actionFetched(data)))
      .catch(() => dispatch(actionFetchingError()));
    // eslint-disable-next-line
  }, []);

  const onDelete = useCallback((id) => {
    request(`http://localhost:3001/news/${id}`, "DELETE")
      .then((data) => console.log(data + "deleted"))
      .then(dispatch(newsDelete(id)))
      .catch((err) => console.log(err));
    toast.error("News was removed", {
      autoClose: 2000,
    });
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
