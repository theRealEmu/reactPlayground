import React from "react";
// import Search from './Search';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./header.css";

function Header(props) {
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-secondary mb-3 py-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {branding}
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home mr-1" />
                Home
              </Link>
            </li>
            <li className="nav-item ml-2">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus mr-1" />
                New Contact
              </Link>
            </li>
            <li className="nav-item ml-2">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question mr-1" />
                About
              </Link>
            </li>
            <li className="nav-item ml-2">
              <Link to="/test" className="nav-link">
                <i className="fas fa-info mr-1" />
                Tests
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  branding: "defaultProp fpr Heading-Component"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

// const headingStyle = {
//   color: 'red',
//   fontSize: '50px'
// }

export default Header;
