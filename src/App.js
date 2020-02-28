import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import Letstalk from './components/pages/Letstalk';
import './App.css';
import './Animate.css'

class App extends Component {

  render(){
    return (
      <Router>
      <div className="App container-fluid">
        <div className="row">
          <Header />
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Content />
              </Fragment>
            )} />
            <Route exact path='/letstalk' component={Letstalk} />
          </Switch>
          <Footer />
        </div>
      </div>
      </Router>
    );
  } 
}

export default App;
