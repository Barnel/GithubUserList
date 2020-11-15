import React from 'react';
import './App.css';
import { UserList } from './Users/UserList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { UserDetails } from './Users/UserDetails';
import { createStore } from 'redux';
import { UserReducer, UserState } from './Users/UserReducer';
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'

export interface AppState {
  userState: UserState
}

function App() {
  const combinedReducers = combineReducers({userState: UserReducer})
  const store = createStore(combinedReducers);

  return (
    <Provider store={store}>
        <Router>
          <Switch>
              <Route exact path="/">
                  <Redirect to="/users"/>
              </Route>
              <Route exact path="/users">
                  <UserList/>
              </Route>
              <Route path="/users/:name">
                  <UserDetails/>
              </Route>
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
