import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';




//Part #2 Render the Components on the Page
var root = document.getElementById('root');
var reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<App/>);
