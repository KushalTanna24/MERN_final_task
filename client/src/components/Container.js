import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Container = (props) => {
  return (
    <Fragment>
      <center>
        <div
          class="card mb-3"
          style={{
            maxWidth: "540px",
            margin: "30px 60px",
            display: "inline-block",
          }}
          align="left"
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img src="..." class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Product Name</h5>
                <p class="card-text">
                  Description: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Donec quis ex euismod, consectetur nisi eget,
                  congue nisl.
                </p>
                <p class="card-text">
                  <small class="text-muted">Created at</small>
                </p>
                <p class="card-text">
                  <small class="text-muted">Updated at</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </center>
    </Fragment>
  );
};

export default Container;
