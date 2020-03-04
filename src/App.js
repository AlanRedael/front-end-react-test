import React from 'react';
import './App.scss';
//import HeaderContainer from './components/Header/headerContainer.js';
import Search from './components/Search/Search.js';
import Table from './components/Table/Table.js';

function App() {
  return (
    <div className="App container-flex">
      <div className="row m-0 justify-content-center">
        <Search />
        <button className="btn btn-outline-secondary m-3 col-test-3">Delete selected</button>
        <button className="btn btn-outline-secondary m-3 col-test-3">Download</button>
      </div>
      <Table />
    </div>
  );
}

export default App;
