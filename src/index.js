import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App"
import './index.css';


const Index = () => {
  return (
    <>
      <App /> 
    </>
  )
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Index />);