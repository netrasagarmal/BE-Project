import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'boxicons';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataContextProvider } from './context/data-context';
import reportWebVitals from './reportWebVitals';
import { UserAuthContextProvider } from './context/AuthContext/auth-context';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserAuthContextProvider>
        <DataContextProvider>
          <App />
        </DataContextProvider>
      </UserAuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();