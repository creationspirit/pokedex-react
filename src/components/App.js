import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "../reducers";
import PokemonIndex from "./pokemon-index";
import PokemonDetail from './pokemon-detail'

import './App.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path='/pokemon/:name' component={PokemonDetail} />
              <Route path="/" component={PokemonIndex} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
