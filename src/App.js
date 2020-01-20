import React from 'react';
import './App.scss';
import HeaderContainer from './components/Header/headerContainer.js';
import Table from './components/Table/Table.js';

function App() {
  return (
    <div className="App container-flex">
      <HeaderContainer />
      <Table />
    </div>
  );
}

export default App;
