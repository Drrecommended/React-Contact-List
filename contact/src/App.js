import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import phonebook from './contacts.json'
// import singleView from 'singleview.js'

function App() {
  const [contacts, setContact] = useState(phonebook)
  return (
    <div className="App">
      <Router>
        <Route path
      </Router>
    </div>
    
  );
}

export default App;
