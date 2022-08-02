import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBtn = ({ listener }) => {
  const [toggle, setToggle] = useState("product");
  const navigate = useNavigate();
  return (
    <>
      <div
        className="add-button"
        style={{ position: "absolute", top: "0", right: "0", margin: "10px" }}
      >
        <button
          type="button"
          className="btn btn-primary"
          style={{ margin: "10px" }}
          onClick={() => navigate("/add")}
        >
          Add
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
            onClick={() => {
              listener("product");
              setToggle("product");
            }}
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
            onClick={() => {
              listener("category");
              setToggle("category");
            }}
          >
            Category
          </button>
        </div>
      </center>
    </>
  );
};

export default AddBtn;
