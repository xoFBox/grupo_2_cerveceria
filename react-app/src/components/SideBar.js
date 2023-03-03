import React, { useState, useEffect } from "react";
import ContentWrapper from "./ContentWrapper";
import CategoriesInDb from "./CategoriesInDb";
import LastProductInDb from "./LastProductInDb";
import NotFound from "./NotFound";
import { Link, Route, Switch } from "react-router-dom";
import Chart from "./Chart";

function SideBar() {
  const [apiProductsResponse, setApiProductsResponse] = useState([]);
  const [apiUsersResponse, setApiUsersResponse] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((res) => res.json())
      .then((data) => setApiProductsResponse(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then((res) => res.json())
      .then((data) => setApiUsersResponse(data))
      .catch((err) => console.log(err));
  }, []);

  const props = {
    products: apiProductsResponse,
    users: apiUsersResponse,
  };

  return (
    <React.Fragment>
      {apiProductsResponse.products && apiUsersResponse.data && (
        <div id="wrapper">
          <ul
            className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="/"
            >
              <div className="sidebar-brand-icon">
                <img
                  className="w-100"
                  src="http://localhost:3001/images/logoNegro.png"
                  alt="Digital House"
                />
              </div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard - Amanecer</span>
              </Link>
            </li>

            <hr className="sidebar-divider" />

            <li className="nav-item">
              <Link className="nav-link" to="/CategoriesInDb">
                <i className="fas fa-fw fa-folder"></i>
                <span>Categories</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/LastProductInDb">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Last Product In Db</span>
              </Link>
            </li>

            <li className="nav-item nav-link">
              <Link className="nav-link" to="/Chart">
                <i className="fas fa-fw fa-table"></i>
                <span>Products</span>
              </Link>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />
          </ul>

          <Switch>
            <Route exact path="/">
              <ContentWrapper {...props} />
            </Route>
            <Route path="/CategoriesInDb">
              <CategoriesInDb {...props.products} />
            </Route>
            <Route path="/LastProductInDb">
              <LastProductInDb {...props.products.products[props.products.products.length - 1]} />
            </Route>
            <Route path="/Chart">
              <Chart {...props} />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      )}
    </React.Fragment>
  );
}
export default SideBar;
