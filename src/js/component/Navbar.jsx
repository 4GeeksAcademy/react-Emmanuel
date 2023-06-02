import React from "react";

const Navbar = () => {
	return (
    
        <nav className="navbar navbar-expand-lg navbar-light bg-dark  ">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">Start Boostrap</a>
          <button className="navbar-toggler btn-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link linkHover active text-light d-flex justify-content-end" aria-current="page" href="#">Home</a>
              <a className="nav-link linkHover text-light d-flex justify-content-end" href="#">About</a>
              <a className="nav-link linkHover text-light d-flex justify-content-end" href="#">Services</a>
              <a className="nav-link linkHover text-light d-flex justify-content-end" href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    
      
	);
};

export default Navbar;
