import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import { client } from './config';
import './index.css';

// sentry tinggal dinyalain
// import * as Sentry from "@sentry/react"
// import { Integrations } from "@sentry/tracing"
// Sentry.init({
//   dsn: "https://26c54b259f5c4b5dae5a23094aa81612@o496263.ingest.sentry.io/5604161",
//   autoSessionTracking: true,
//   integrations: [
//     new Integrations.BrowserTracing(),
//   ],

//   tracesSampleRate: 1.0,
// })

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
