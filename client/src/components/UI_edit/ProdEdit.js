import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProdEdit = () => {
  const location = useLocation();
  const { product } = location.state;

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // const [images, setImages] = useState([]);
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [fetchPId, setFetchPId] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const link = "http://localhost:5000/products/" + product._id;
    const response = await fetch(link, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        price,
        categoryId,
        subCategoryId,
      }),
    });
    if (response.ok) {
      console.log("success");
      alert("Updated");
      NavBack();
    } else {
      console.log(response.error);
      alert("Couldnt update");
    }
  };

  const NavBack = () => {
    navigate("/");
  };

  const resetHandler = () => {
    setName("");
    setDescription("");
    setPrice("");
    setCategoryId("");
    setSubCategoryId("");
  };

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => {
        setFetchPId(data);
      });
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setCategoryId(product.categoryId[0]._id);
    setSubCategoryId(product.subCategoryId);
  }, [
    product.categoryId,
    product.description,
    product.name,
    product.price,
    product.subCategoryId,
  ]);

  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <h1>Edit category</h1>
        <form style={{ width: "60%", margin: "auto" }} onSubmit={submitHandler}>
          <div autoComplete="off" className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              defaultValue={product.name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group" autoComplete="off">
            <label htmlFor="description">Description</label>
            {/* textarea for description */}
            <textarea
              className="form-control"
              id="description"
              rows="3"
              placeholder="Enter description"
              defaultValue={product.description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              min={0}
              max={100000000}
              defaultValue={price}
              className="form-control"
              id="price"
              placeholder="Enter price"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          {/* category with dropdown */}
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              className="form-select"
              id="category"
              onChange={(e) => {
                setCategoryId(e.target.value);
              }}
              defaultValue={product.categoryId[0]._id}
            >
              <option disabled>Select parent category</option>
              {fetchPId.map(
                (item) =>
                  item.parent === null && (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  )
              )}
            </select>

            <label htmlFor="category">Sub-category</label>
            <select
              className="form-select"
              id="subCategory"
              defaultValue={product.subCategoryId[0]._id}
              onChange={(e) => {
                setSubCategoryId(e.target.value);
              }}
            >
              <option disabled>Select sub-category</option>
              {fetchPId.map(
                (item) =>
                  item.parent !== null && (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  )
              )}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              className="form-control"
              type="file"
              id="formFileMultiple"
              multiple
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ margin: "20px 0px" }}
          >
            Submit
          </button>

          <Link to={"/"}>
            <button
              type="button"
              className="btn btn-outline-danger"
              style={{ margin: "20px 10px" }}
              onClick={() => resetHandler()}
            >
              Cancel
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default ProdEdit;

// {
//   "_id": "62e8ee9354ba0708df9fedc5",
//   "categoryId": [
//       {
//           "_id": "62e8be0122aec099f3a8850a",
//           "name": "Mobile",
//           "parent": null,
//           "createdAt": "2022-08-02T06:02:41.333Z",
//           "updatedAt": null,
//           "__v": 0
//       }
//   ],
//   "subCategoryId": "62e8be0722aec099f3a88510",
//   "name": "iphone 69",
//   "description": "lolololol",
//   "price": 69420,
//   "createdAt": "2022-08-02T09:29:55.722Z",
//   "updatedAt": null,
//   "__v": 0
// }
