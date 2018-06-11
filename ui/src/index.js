import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
// createstore is the state management that we use redux for and middleware is for the flux to be able to communicate to server (Alchemy uses Mobx)
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from "./rootReducer";

//setting up the redux store, in render Provider sets up the store
const store = createStore(
   rootReducer, 
   composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}> 
         <App />
      </Provider>
    </BrowserRouter>, 
    document.getElementById('root')
);

registerServiceWorker();