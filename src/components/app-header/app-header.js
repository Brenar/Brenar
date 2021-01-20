import React from 'react';
import { Link } from "react-router-dom";
import './app-header.scss';

const AppHeader = () => {
    return (
        <div className="header">
          <h1>Библиотека фильмов</h1>
          {/* <span style={{display: "flex", width: '300px', 'justify-content': 'space-around', margin: '0 auto'}}>
            <Link to="/table">Table</Link>
            <Link to='/form'>Form</Link>
          </span> */}
        </div>
    )
}

export default AppHeader;