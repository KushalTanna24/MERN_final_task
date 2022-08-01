import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CatForm from "./CatForm";
import ProdForm from "./ProdForm";

const Form = () => {
  const [toggle, setToggle] = useState("product");
  const navigate = useNavigate();
  return (
    // create react form which contains fields for name, description, image, price, and category, created at, and updated at
    <>
      <div
        className="add-button"
        style={{ position: "absolute", top: "0", left: "0", margin: "10px" }}
      >
        <button
          type="button"
          className="btn btn-primary"
          style={{ margin: "10px" }}
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <center>
        <div className="slider-button">
          <button
            type="button"
            className={
              toggle === "product"
                ? "btn btn-primary"
                : "btn btn-outline-primary"
            }
            style={{ margin: "10px" }}
            onClick={() => setToggle("product")}
          >
            Product
          </button>
          <button
            type="button"
            className={
              toggle === "category"
                ? "btn btn-primary"
                : "btn btn-outline-primary"
            }
            style={{ margin: "10px" }}
            onClick={() => setToggle("category")}
          >
            Category
          </button>
        </div>
      </center>

      {/* form to add product */}
      {toggle === "product" ? <ProdForm /> : <CatForm />}
    </>
  );
};

export default Form;
