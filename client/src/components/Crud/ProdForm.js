import React, { useEffect, useState } from "react";

const ProdForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // const [images, setImages] = useState([]);
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [fetchPId, setFetchPId] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/products", {
      method: "POST",
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
      alert("Added");
      window.location.reload();
    } else {
      console.log(response.error);
      alert("error");
    }
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
  }, []);

  return (
    <form style={{ width: "60%", margin: "auto" }} onSubmit={submitHandler}>
      <div autoComplete="off" className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
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
          value={description}
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
          value={price}
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
          defaultValue=""
        >
          <option value="" disabled>
            Select Category
          </option>
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
          defaultValue=""
          onChange={(e) => {
            setSubCategoryId(e.target.value);
          }}
        >
          <option value="" disabled>
            Select Sub Category
          </option>
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

      <button
        type="button"
        className="btn btn-outline-danger"
        style={{ margin: "20px 10px" }}
        onClick={resetHandler}
      >
        Cancel
      </button>
    </form>
  );
};

export default ProdForm;

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
