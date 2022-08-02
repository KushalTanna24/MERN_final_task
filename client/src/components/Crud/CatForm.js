import React, { useEffect, useState } from "react";

const CatForm = () => {
  const [name, setName] = useState("");
  const [parent, setParent] = useState(undefined);
  const [fetchPId, setFetchPId] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      resetHandler();
      return alert("Empty name cannot be added please try again");
    }
    const response = await fetch("http://localhost:5000/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        parent,
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
    setParent("");
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
          placeholder="Enter name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div autoComplete="off" className="form-group">
        <label htmlFor="name">Parent</label>
        <select
          className="form-select"
          id="parent"
          defaultValue=""
          onChange={(e) => setParent(e.target.value)}
        >
          <option value="" hidden>
            Select Parent category
          </option>
          {fetchPId.map(
            (item) =>
              item.parent === null && 
              (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              )
          )}
        </select>
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
        onClick={() => resetHandler()}
      >
        Cancel
      </button>
    </form>
  );
};

export default CatForm;
