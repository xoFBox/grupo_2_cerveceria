import React from "react";

function CategoriesInDb(props) {
  
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categories in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {Object.keys(props.countByCategory).map((val, i) => {
              return (
                <div className="col-lg-6 mb-4" key={i}>
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">{val}: {props.countByCategory[val]}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
