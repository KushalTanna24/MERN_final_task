import React, { useState } from "react";
import AddBtn from "../UI_edit/AddBtn";
import CatMap from "./CatMap";
import ProdMap from "./ProdMap";

const List = () => {
  const [clickListener, setClickListener] = useState("product");
  const [searchTerm, setSearchTerm] = useState("");
  const clickedBtn = (e) => {
    setClickListener(e);
  };

  return (
    <>
      <AddBtn listener={clickedBtn} />
      {/* search bar */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                ariaLabel="Search"
                ariaDescribedby="basic-addon2"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <br />

      {clickListener === "product" ? (
        <ProdMap search={searchTerm} />
      ) : (
        <CatMap search={searchTerm} />
      )}
    </>
  );
};

export default List;
