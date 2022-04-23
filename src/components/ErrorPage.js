import React from "react";

function ErrorPage() {
  return (
    <div className="errorPage">
      <svg viewBox="0 0 1000 400">
        <text id="willie" x="50%" y="50%" text-anchor="middle" fill="none">
          404
        </text>
        <use xlinkXhref="#willie" className="will will1"></use>
        <use xlinkXhref="#willie" className="will will2"></use>
        <use xlinkXhref="#willie" className="will will3"></use>
        <use xlinkXhref="#willie" className="will will4"></use>
        <use xlinkXhref="#willie" className="will will5"></use>
      </svg>
      <h1>Page Not Found</h1>
      <p>Sorry, but the page you were trying to view does not exist.</p>
      <a href="/" style={{ "text-decoration": "none" }}>
        <button onclick="window.history.back()" className="btn">
          Home
        </button>
      </a>
      <button onclick="window.history.back()" className="btn">
        Return
      </button>
    </div>
  );
}

export default ErrorPage;
