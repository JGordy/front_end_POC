import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BaseLayout.css';

export default class BaseLayout extends Component {

  render() {

    let navStyle = {
      padding: '1rem',
    };

    let linkStyle = {
      textDecoration: 'none',
      padding: '1rem'
    };

    return (
      <div className="Baselayout" id='main_header' style={navStyle}>

        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/causes" style={linkStyle}>Causes</Link>

        {this.props.children}

      </div>
    )
  }
};
