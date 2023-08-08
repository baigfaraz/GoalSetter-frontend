import React from "react";
import { Link } from "react-router-dom";

const Header = ({ pageName }) => {
  return (
    <div className="header">
      <div className="title">GoalSetter</div>
      <div className="mainHeadingText">{pageName}</div>
      <div className="menu">
        <div className="menuItem">
          <Link to="/Pending" className="menuLink">
            Pending
          </Link>
        </div>
        
        <div className="menuItem">Logout</div>
      </div>
    </div>
  );
};

export default Header;
