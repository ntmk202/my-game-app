// index.js
import React from 'react';
import { Provider } from 'react-redux';
import Index from './component/Index';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
)}
  
export default App
