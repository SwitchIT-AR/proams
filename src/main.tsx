import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import App from './App';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './index.css'; // acá metemos el fondo negro

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        primaryColor: 'indigo',
        defaultRadius: 'md',
        fontFamily: 'Roboto, Montserrat, sans-serif',
        headings: { fontFamily: 'Montserrat, Roboto, sans-serif' },
      }}
      defaultColorScheme="dark"
    >
      <Notifications position="top-right" />
      <App />
    </MantineProvider>
  </React.StrictMode>
);
