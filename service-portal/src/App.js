import './App.css';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import RegPageseeker from './components/Registrationpageseeker.js'
import RegPagegiver from './components/Registrationpagegiver.js'
import Loginpageopt from './components/Loginoption'
import Error from './components/Error'
import Login from './components/Login.js'
//nivesh
import { NavigationBar } from './components/NavigationBar';
import { Home } from './components/Home';
import { History } from './components/History';

import { Profile } from './components/Profile';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Search  from './components/Search';
import { About } from './components/About';


import {
    Switch,
    Route,
    
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">              
              {<Switch>
                  <Route exact path='/' component={Loginpageopt} />
                  <Route exact path='/login' component={Login}/>
                  <Route exact path='/regpageseeker' component={RegPageseeker} /> 
                  <Route exact path='/regpagegiver' component={RegPagegiver} />  
                  <Route exact path="/dashboard" component={Home} />
                  <Route path="/history" component={History} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/about" component={About} />
                  <Route path="/mysearch" component={Search} />
                  <Route component={Error} />
 
                  
                  
                  
              </Switch>}
              
                         
              
      
      </header>
    </div>
  );
}

export default App;
