import React from 'react';
import { useTheme } from '../themes/ThemeContext';
import  '../index.css'

const Button = () => {
  const { toggleTheme } = useTheme();

  return <button className="Btn" onClick={toggleTheme}>Cambiar Tema</button>;
};

export default Button;
