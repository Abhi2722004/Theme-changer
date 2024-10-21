// src/App.js
import React from 'react';
import { ThemeProvider } from './context/ThemeContext'; // Import the ThemeProvider
import ThemeToggle from './components/ThemeToggle'; // Import the ThemeToggle component
import './App.css'; // Import CSS for styling

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Hello <b>BrainyBeam</b> This is a Theme Changer button</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;
