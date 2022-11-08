import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './components/layout1/footer';
import Header from './components/layout1/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App /> 
    <Header />
    <Footer/>
  </React.StrictMode>
);


