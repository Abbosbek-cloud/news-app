import React from "react";

function Spinner() {
  return (
    <div className="spinn">
      <div className="spinner-border text-success mx-auto mt-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
