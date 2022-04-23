import React, { useState } from "react";
import { useHttp } from "../hook/useHttp";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { newsAdd } from "../redux/actions";
import { toast } from "react-toastify";

function NewsAddForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const { filter, filterLoadingStatus } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { request } = useHttp();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const news = { id: v4(), description, name, category };
    request("http://localhost:3001/news", "POST", JSON.stringify(news))
      .then((res) => console.log(res))
      .then(dispatch(newsAdd(news)))
      .catch((err) => console.log(err));
    setName("");
    setDescription("");
    setCategory("");
  };

  const filterRendering = (filters, status) => {
    if (status === "loadig") {
      return <option>Loading options</option>;
    } else if (status === "error") {
      return <option>Error options</option>;
    }

    if (filters && filters.length > 0) {
      return filters.map(({ label, name }) => {
        // eslint-disable-next-line
        if (name === "all") return;
        return (
          <option key={name} value={name}>
            {label}
          </option>
        );
      });
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="formAdd shadow-lg p-3 rounded">
      <div className="input_container">
        <label htmlFor="name" className="form-label fs-4">
          Name for news
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter news ..."
          className="form-control"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input_container">
        <label htmlFor="description" className="form-label fs-4">
          Description for news
        </label>
        <textarea
          type="text"
          name="description"
          id="description"
          placeholder="Enter a description ..."
          className="form-control"
          required
          style={{ height: "120px" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="input_container">
        <label htmlFor="name" className="form-label fs-4">
          Category for news
        </label>
        <select
          name="category"
          id="category"
          className="form-select"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Choose the category ...</option>
          {filterRendering(filter, filterLoadingStatus)}
        </select>
      </div>
      <button
        type="submit"
        className="btn btn-dark m-2"
        onClick={() => {
          toast.success("News added!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default NewsAddForm;
