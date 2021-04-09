import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


// Permite utilizar o DOM(HTML)

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <script
    type="text/javascript"
    src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.js"
    ></script>
  </React.StrictMode>
  
  ,
  document.getElementById('root')
  
);