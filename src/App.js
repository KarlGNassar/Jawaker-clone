import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Games from './Games';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Competitions from './Competitions';
import Challenges from './Challenges';
import Store from './Store';
import Login from './Login';
import Footer from './Footer';
import { auth } from './firebase';

function App() {
  return (
    <div className="app">
      <Router>
          <Switch>
            <Route path="/games">
              <Header />
              <Games />
              <Footer />
            </Route>

            <Route path="/competitions"> 
              <Header />
              <Competitions />
              <Footer />
            </Route>

            <Route path="/challenges">
              <Header />
              <Challenges />
              <Footer />
            </Route>
            
            <Route path="/store">
              <Header />
              <Store />
              <Footer />
            </Route>

            <Route path="/login">
              <Login />
              <Footer />
            </Route>

            <Route path="/">
              <Header />
              <Body />
              <Footer />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
