import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CatEdit = () => {
  const location = useLocation();
  const { category } = location.state;
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [parent, setParent] = useState(undefined);
  const [fetchPId, setFetchPId] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      resetHandler();
      return alert("Empty name cannot be added please try again");
    }
    const link = "http://localhost:5000/category/" + category._id;
    const response = await fetch(link, {
      method: "PUT",
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
      alert("Updated");
      NavBack();
      window.location.reload();
    } else {
      console.log(response.error);
      alert("Couldnt update");
    }
  };

  const idToName = (id) => {
    const name = fetchPId.find((item) => item._id === id);
    if (name) return name.id;
    else return "";
  };

  const catName = idToName(category.parent);
  console.log(catName);
  const NavBack = () => {
    navigate("/");
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
    setName(category.name);
    setParent(category.parent);
  }, []);

  return (
    <>
      {/* <div
        className="add-button"
        style={{ position: "absolute", top: "0", left: "0", margin: "10px" }}
      >
        <button
          type="button"
          className="btn btn-primary"
          style={{ margin: "10px" }}
          onClick={() => }
        >
          Back
        </button>
      </div> */}
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
              placeholder="Enter name"
              required
              defaultValue={category.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div autoComplete="off" className="form-group">
            <label htmlFor="name">Parent</label>
            <select
              className="form-select"
              id="parent"
              defaultValue=""
              onChange={(e) => {
                const check = fetchPId.find((x) => x.name === e.target.value);
                if (check) {
                  setParent(check._id);
                }
              }}
            >
              <option disabled selected>
                Select parent
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

export default CatEdit;
