import React from 'react';
import { ThemeProvider } from './themes/ThemeContext';
import Router from './routes/RoutesApp';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Router />
      </div>
    </ThemeProvider>
  );
};

export default App;
