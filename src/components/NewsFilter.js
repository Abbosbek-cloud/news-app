import React, { useEffect } from "react";
import Spinner from "./Spinner";
import { useHttp } from "../hook/useHttp";
import { useDispatch, useSelector } from "react-redux";
import {
  filterFetched,
  filterFetching,
  activeFilteredChange,
  filterFetchError,
} from "../redux/actions";
import ErrorPage from "./ErrorPage";
import classNames from "classnames";

function NewsFilter() {
  const { filter, activeFilter, filterLoadingStatus } = useSelector(
    (state) => state
  );

  const dispatch = useDispatch();

  const { request } = useHttp();

  useEffect(() => {
    dispatch(filterFetching());
    request("http://localhost:3001/filter")
      .then((data) => {
        dispatch(filterFetched(data));
        console.log(data);
      })
      .catch((err) => dispatch(filterFetchError(err)));
    // eslint-disable-next-line
  }, []);

  if (filterLoadingStatus === "loading") {
    return <Spinner />;
  } else if (filterLoadingStatus === "error") {
    return <ErrorPage />;
  }

  const renderDataCheck = (arr) => {
    if (arr.length === 0) {
      return <h3 className="text-center mt-5">Nothing found</h3>;
    }

    return arr.map(({ className, name, label }) => {
      const btnClass = classNames("btn", className, {
        active: name === activeFilter,
      });
      return (
        <button
          key={name}
          id={name}
          className={btnClass}
          onClick={() => dispatch(activeFilteredChange(name))}
        >
          {label}
        </button>
      );
    });
  };

  const elements = renderDataCheck(filter);

  return (
    <div className="mt-2 mb-2 rounded shadow-lg p-2 w-100">
      <div className="">
        <p className="">Filter by Category</p>
        <div className="btnGr">{elements}</div>
      </div>
    </div>
  );
}

export default NewsFilter;
