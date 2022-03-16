import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Barchart from './components/charts/Barchart';
import Pie from './components/charts/Pie';
import Feature from './components/featuredInfo/FeaturedInfo'


ReactDOM.render(
  <React.StrictMode>
    <Feature  />
    <div className="contenedor dos-columnas">
      <div>
        <Pie /> 
      </div>
      <div> 
        <Barchart />
      </div>
    </div> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
