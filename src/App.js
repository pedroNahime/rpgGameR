import React from 'react';
import { Provider } from 'react-redux'
import Routes from "./routes";
import store from './store'

function App() {
  return (
    <div>
        <Provider store={store}>
            <Routes/>
        </Provider>
    </div>
  );
}

export default App;
