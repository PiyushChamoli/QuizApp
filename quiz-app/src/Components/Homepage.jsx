import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <h1>Quiz App</h1>
      <Link to="/quiz" className="c-btn">
        Get Started!
      </Link>
    </>
  );
}

export default Homepage;
