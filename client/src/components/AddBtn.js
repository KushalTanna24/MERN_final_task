import React from "react";

const AddBtn = () => {
  return (
    <div
      className="add-button"
      style={{ position: "absolute", top: "0", right: "0", margin: "10px" }}
    >
      <button
        type="button"
        className="btn btn-primary"
        style={{ margin: "10px" }}
      >
        Add
      </button>
    </div>
  );
};

export default AddBtn;
