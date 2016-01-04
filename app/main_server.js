import React from 'react';
import ReactDomServer from 'react-dom/server';
import App from './client/containers/App.jsx';

// All publications are included!
let publicationsContext = require.context('./publications', true, /.+\.js$/);
publicationsContext.keys().forEach(publicationsContext);

// All methods are included!
let methodsContext = require.context('./methods', true, /.+\.js$/);
methodsContext.keys().forEach(methodsContext);

console.log('\n\nRunning on server only');
console.log('React SSR:', ReactDomServer.renderToString(<App />));
