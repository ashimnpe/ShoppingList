import React from 'react';
import AppNavbar from './components/appnavabar';
import ShoppingList from './components/shoppinglist';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <ShoppingList/>
    </div>
  );
}

export default App;
