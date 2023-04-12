import React from "react";
import { Nav } from 'react-bootstrap';
function Navbar(){
    return (
        <>
        <Nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Nav.Link className="navbar-brand" href="/">TechPack</Nav.Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Nav.Link className="nav-link active" aria-current="page" href="/">Home</Nav.Link>
        </li>
        <li className="nav-item">
          <Nav.Link className="nav-link active" aria-current="page" href="/about">About</Nav.Link>
        </li>
        <li className="nav-item">
          <Nav.Link className="nav-link active" aria-current="page" href="/service">Service</Nav.Link>
        </li>
        <li className="nav-item">
          <Nav.Link className="nav-link active" aria-current="page" href="/contect">Contect</Nav.Link>
        </li>
      </ul>
    </div>
  </div>
</Nav>
        </>
    )
}
export default Navbar;