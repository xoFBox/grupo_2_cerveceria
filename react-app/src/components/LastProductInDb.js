<<<<<<< HEAD
import React from "react";

function LastProductInDb(props) {
  console.log(props);
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Last Product in Data Base
          </h5>
        </div>
        <div className="card-header py-3">
          <h4 className="m-0 font-weight-bold text-gray-800">{props.name}</h4>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }}
              src={props.urlImage}
              alt="Last Product in Db"
            />
          </div>
          <p>
            {props.description}
          </p>
          <button className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            Price: {props.price}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LastProductInDb;
=======
import React from "react";

function LastProductInDb(props) {
  console.log(props);
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Last Product in Data Base
          </h5>
        </div>
        <div className="card-header py-3">
          <h4 className="m-0 font-weight-bold text-gray-800">{props.name}</h4>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }}
              src={props.urlImage}
              alt="Last Product in Db"
            />
          </div>
          <p>
            {props.description}
          </p>
          <button className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            Price: {props.price}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LastProductInDb;
>>>>>>> 8128e3484fd9d8063f3be01824a90496e4e513cb
