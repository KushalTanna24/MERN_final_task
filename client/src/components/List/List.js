import React, { useState } from "react";
import AddBtn from "../UI/AddBtn";
import CatMap from "./CatMap";
import ProdMap from "./ProdMap";

const List = () => {
  const [clickListener, setClickListener] = useState("product");
  const clickedBtn = (e) => {
    setClickListener(e);
  };

  return (
    <>
      <AddBtn listener={clickedBtn} />
      <br />

      {clickListener === "product" ? <ProdMap /> : <CatMap />}
    </>
  );
};

export default List;
