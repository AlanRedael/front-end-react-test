import React from 'react';
import Search from '../Search/Search.js';
//import './App.css';

function headerContainer() {
  return (
    <div className="row">
      <Search />
      <button className="btn btn-outline-secondary m-3">Delete selected</button>
      <button className="btn btn-outline-secondary m-3">Download</button>
    </div>
  );
}

export default headerContainer;
