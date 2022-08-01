import React, { Fragment, useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProdMap = () => {
  const [products, setProducts] = useState([]);

  const fetchHandler = useCallback(async function () {
    try {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deleteHandler = async (e) => {
    console.log(e);
    const response = await fetch(`http://localhost:5000/products/${e}`, {
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

  const productMap = products.map((product) => {
    return (
      <>
        {/* carousel */}
        <div className="card" style={{ width: "18rem", margin: "10px" }}>
          <img
            src={product.image}
            className="card-img-top"
            alt="..."
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">
              <small className="text-muted">
                category: {product.categoryId[0].name}
              </small>
              <br />
              <small className="text-muted">
                Created at: {product.createdAt.slice(0, 10)}
              </small>
              <br />
              <small className="text-muted">
                Updated at: {product.updatedAt.slice(0, 10)}
              </small>
            </p>
            <div
              className="btn-group"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => {
                  console.log("edit");
                }}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={(e) => {
                  e.preventDefault();
                  deleteHandler(product._id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </>
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

export default ProdMap;
