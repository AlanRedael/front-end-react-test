import React from 'react';
import './Search.css'

function Search() {
  return (
    <div className="col-test-3">
      <div className="form-group flex-wrap: wrap">
        <label>Filter by name</label>
        <div class="form-group has-search">
          <span class="fa fa-search form-control-feedback"></span>
          <input type="text" class="form-control"></input>
        </div>
      </div>
    </div>
  );
}

export default Search;
