import React, { Fragment } from "react";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./pages/auth/login";
import Crearcuenta from "./pages/auth/crearcuenta";

function App() {
  return (
    <div>
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" exact element={<Login/>}/>
            <Route path="/crearcuenta" exact element={<Crearcuenta/>}/>


          </Routes>
        </Router>
      </Fragment>

    </div>
  );
}

export default App;
