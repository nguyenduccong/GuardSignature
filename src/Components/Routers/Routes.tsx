import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import pages from "./Pages";
import { RoutesString } from "./routesString";

function RoutesWrapper() {
  return (
    <>
      <Header />
      <Switch>
        {pages.map((item) => {
          return (
            <Route key={item.path} path={item.path} component={item.component} exact={item.exact}></Route>
          );
        })}
        <Redirect to={RoutesString.PageNotFound}></Redirect>
      </Switch>
      <Footer />
    </>
  );
}

export default RoutesWrapper;