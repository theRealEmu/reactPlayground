import React from 'react';
// import Search from './Search';
import PropTypes from 'prop-types';
import './header.css';


function Header(props) {

  const { branding } = props;

  return (

   <nav className="navbar navbar-expand-sm navbar-dark bg-secondary mb-3 py-3">
    <div className="container">
      <a href="/" className="navbar-brand">{branding}</a>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
        </ul>
      </div>
    </div>
   </nav>

  )
}

Header.defaultProps = {
  branding: "defaultProp fpr Heading-Component"
}

Header.propTypes = {
  branding: PropTypes.string.isRequired
}

// const headingStyle = {
//   color: 'red', 
//   fontSize: '50px'
// }


export default Header;