import React from "react";

export const Photography = () => {
  return (
    <div>
      <div className="container round mb-5">
        <div className="row alg">
          <div className="col-12 col-md-6 photograph">
            <div className="pt-5 mt-5">
              <p className="title">Photography</p>
            </div>
          </div>
          <div className="col-12 col-md-6 photographTitle pt-5">
            <p className="name pt-5 mt-5 white">
              is an art of teleporting <br />
              the past into <b>future</b>.
            </p>
            <p className="m-2 white">Some of my shots.....</p>
          </div>
        </div>
        <div className="row mt-5 ml-3">
          <div className="col-12 col-md-6 car">
            <div className="first"></div>
          </div>
          <div className="col-12 col-md-6 car">
            <div className="second"></div>
          </div>
        </div>
        <div className="row ml-3">
          <div className="col-12 col-md-6 car">
            <div className="third"></div>
          </div>
          <div className="col-12 col-md-6 car">
            <div className="fourth"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
