import React from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <div className="btn-links">
      <Link to="Billing.js">
        <button className="btn">Next</button>
      </Link>
      <Link to="/" className="link">
        Cancel Payment
      </Link>
    </div>
  );
}

export default Button;
