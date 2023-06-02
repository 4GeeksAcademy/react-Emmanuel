import React from "react";
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx"


//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="bg-secondary">
			<Navbar />
			<Header />
			<Body />
			<Footer />
		</div>
	
	);
};

export default Home;
