import React, { Fragment, useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

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
      <div
        className="card"
        style={{ width: "18rem", margin: "10px" }}
        key={product.createdAt}
      >
        <img
          // src random image
          src="https://picsum.photos/400"
          className="card-img-top"
          alt="..."
          style={{
            objectFit: "cover",
            height: "200px",
            width: "100%",
          }}
        />

        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          {/* price */}
          <p className="card-text">
            <small>{product.price} ₹</small>
          </p>
          <p className="card-text">{product.description.slice(0, 100)} ...</p>
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
              Updated at:
              {product.updatedAt === null
                ? " - "
                : product.updatedAt.slice(0, 10)}
            </small>
          </p>
          <div
            className="btn-group"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link to={`/edit/prod`} state={{ product }}>
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
                  deleteHandler(product._id);
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

export default ProdMap;
