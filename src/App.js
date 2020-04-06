import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import { Provider } from 'react-redux';
import store from './redux';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}