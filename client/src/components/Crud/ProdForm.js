import React, { useState } from "react";

const ProdForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subCategoru, setSubCategoru] = useState("");
  const [toggle, setToggle] = useState("product");

  return (
    <form style={{ width: "60%", margin: "auto" }}>
      <div autoComplete="off" className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
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
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          min={0}
          max={10000}
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
            setCategory(e.target.value);
          }}
          defaultValue=""
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Kushal">Kushal</option>
          <option value="C">Sujal</option>
          <option value="D">Bro</option>
        </select>

        <label htmlFor="category">Sub-category</label>
        <select
          className="form-select"
          id="subCategory"
          defaultValue=""
          onChange={(e) => {
            setSubCategoru(e.target.value);
          }}
        >
          <option value="" disabled>
            Select Sub Category
          </option>
          <option value="Kushal">Kushal</option>
          <option value="C">Sujal</option>
          <option value="D">Bro</option>
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
        type="submit"
        className="btn btn-outline-danger"
        style={{ margin: "20px 10px" }}
        onClick={() => {}}
      >
        Cancel
      </button>
    </form>
  );
};

export default ProdForm;
