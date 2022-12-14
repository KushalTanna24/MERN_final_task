import React, { Fragment, useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const CatMap = () => {
  const [category, setCategory] = useState([]);

  const fetchHandler = useCallback(async function () {
    try {
      const response = await fetch("http://localhost:5000/category");
      const data = await response.json();

      setCategory(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deleteHandler = async (e) => {
    const response = await fetch(`http://localhost:5000/category/${e}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log("success");
      alert("Deleted");
      window.location.reload();
    } else {
      console.log(response.error);
      alert("error");
    }
  };

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  const productMap = category.map((category) => {
    return (
      <div
        className="card"
        key={category.createdAt}
        style={{ width: "18rem", margin: "10px" }}
      >
        <div className="card-body">
          <h5 className="card-title">{category.name}</h5>
          <p className="card-text">
            <small className="text-muted">
              Created At: {category.createdAt.slice(0, 10)}
            </small>
          </p>
          <p className="card-text">
            <small className="text-muted">
              Updated at:
              {category.updatedAt === null
                ? " - "
                : category.updatedAt.slice(0, 10)}
            </small>
          </p>
          {/* edit and delete button */}
          <div
            className="btn-group"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link to={`/edit/cat`} state={{ category }}>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => {}}
              >
                Edit
              </button>
            </Link>
            <Link to={"/"}>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={(e) => {
                  e.preventDefault();
                  deleteHandler(category._id);
                }}
              >
                Delete
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Fragment>
      <div
        className="card-columns"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {productMap}
      </div>
    </Fragment>
  );
};

export default CatMap;
