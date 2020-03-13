import React from 'react';
import './App.css';

import Header from './components/Header';
import Balance from './components/Balance';
import IncExp from './components/IncExp';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncExp />
      </div>
    </div>
  );
}

export default App;
