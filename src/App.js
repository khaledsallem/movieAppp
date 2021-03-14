import React, { Component } from 'react'
import Header from './Components/Header';
import Accueil from './Components/Accueil';
import Movies from './Components/Movies';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {

  return (
    <div className="App">
      <Header />

        <Switch>
          <Route path="/Movies" render={()=><Movies />} />
          <Route path="/Contact" render={()=><Contact />} />
          <Route path="/Blog" component={Blog} />
          <Route path="/" exact component={Accueil} />
          <Redirect to='/Movies' />
        </Switch>
    </div>
  );
}




export default App;
