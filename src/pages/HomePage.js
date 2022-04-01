import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home__page">
      <Link to="/add" className="btn btn-primary">
        Add Customer
      </Link>
    </div>
  );
};

export default HomePage;
