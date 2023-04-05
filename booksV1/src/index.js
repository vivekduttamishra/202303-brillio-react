import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import 'bootstrap/dist/js/bootstrap.min';


import App from './app';

//always import your css after every other css
import './app.css';

var root=ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App/>);

