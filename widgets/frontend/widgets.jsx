import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  ReactDOM.render(<div className="components">
    <Clock />
    <Tabs />
  </div>,
  root)
});