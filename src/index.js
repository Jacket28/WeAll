import React from 'react';
import ReactDOM from 'react-dom';
import './design/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {LoginProvider} from "./services/login-service";

ReactDOM.render(
  <React.StrictMode>
      <LoginProvider>
          <App />
      </LoginProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
