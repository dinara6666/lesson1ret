// src/App.js
import React from 'react';
import './App.css'; 
function App() {
  return (
    <div className="App">

      <div className="container mt-4">
        <h3>Пример кнопок Bootstrap 5</h3>
        
        <button type="button" className="btn btn-outline-primary m-2">
          Primary
        </button>
        <button type="button" className="btn btn-outline-secondary m-2">
          Secondary
        </button>
        <button type="button" className="btn btn-outline-success m-2">
          Success
        </button>
        <button type="button" className="btn btn-outline-danger m-2">
          Danger
        </button>
        <button type="button" className="btn btn-outline-warning m-2">
          Warning
        </button>
        <button type="button" className="btn btn-outline-info m-2">
          Info
        </button>
        <button type="button" className="btn btn-outline-light m-2">
          Light
        </button>
        <button type="button" className="btn btn-outline-dark m-2">
          Dark
        </button>
      </div>
    </div>
  );
}

export default App;




