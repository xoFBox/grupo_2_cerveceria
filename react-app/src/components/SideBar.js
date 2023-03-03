import React, { useState, useEffect } from "react";
import ContentWrapper from "./ContentWrapper";
import CategoriesInDb from "./CategoriesInDb";
import LastProductInDb from "./LastProductInDb";
import NotFound from "./NotFound";
import { Link, Route, Switch } from "react-router-dom";
import Chart from "./Chart";

function SideBar() {
  const [apiResponse, setApiResponse] = useState({products: undefined, users: undefined});

  useEffect(() => {
    Promise.all([fetch("/api/products").then(res=> res.json()), fetch("/api/users").then(res=> res.json())])
      .then( data => {
        setApiResponse({products: data[0], users: data[1]})
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      {apiResponse.products && apiResponse.users && (
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
              <ContentWrapper {...apiResponse} />
            </Route>
            <Route path="/CategoriesInDb">
              <CategoriesInDb {...apiResponse.products} />
            </Route>
            <Route path="/LastProductInDb">
              <LastProductInDb {...apiResponse.products.products[apiResponse.products.products.length - 1]} />
            </Route>
            <Route path="/Chart">
              <Chart {...apiResponse} />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      )}
    </React.Fragment>
  );
}
export default SideBar;
