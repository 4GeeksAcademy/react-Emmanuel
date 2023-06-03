import React from "react";
import imagen from "/workspaces/react-Emmanuel/src/img/nissan-gtr-vs-supra-4k-k-1360x768.jpg";
const Card = () => {
    
	return ( 
        <div className="col-sm-3 rounded">
        <div className="card m-2 rounded">
    <img src={imagen} className="card-img-top" alt="..."/>
    <div className="card-body bg-dark text-light">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer bg-dark">
      <small className="text-light">Last updated 3 mins ago</small>
    </div>
  </div>
  </div>
        );
    };
    

export default Card;