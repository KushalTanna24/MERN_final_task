import React from "react";

const Form = () => {
  return (
    // create react form which contains fields for name, description, image, price, and category, created at, and updated at
    <>
      {/* slider button to select product or category */}
      <center>
        <div className="slider-button">
          <button
            type="button"
            className="btn btn-primary"
            style={{ margin: "10px" }}
          >
            Product
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{ margin: "10px" }}
          >
            Category
          </button>
        </div>
      </center>

      {/* form to add product */}
      <form style={{ width: "60%", margin: "auto" }}>
        <div autoComplete="off" className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
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
          />
        </div>
        {/* category with dropdown */}
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select className="form-control" id="category">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="createdAt">Created At</label>
          <input
            type="date"
            className="form-control"
            id="createdAt"
            placeholder="Enter created at"
          />
        </div>
        <div className="form-group">
          <label htmlFor="updatedAt">Updated At</label>
          <input
            type="date"
            className="form-control"
            id="updatedAt"
            placeholder="Enter updated at"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            class="form-control"
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
      </form>
    </>
  );
};

export default Form;
