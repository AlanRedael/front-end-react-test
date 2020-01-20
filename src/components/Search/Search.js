import React from 'react';
import './Search.css'

function Search() {
  return (
    <div className="col-test-3">
      <div className="form-group flex-wrap: wrap">
        <label>Filter by name</label>
        <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback"></span>
          <input type="text" className="form-control"></input>
        </div>
      </div>
    </div>
  );
}

export default Search;
