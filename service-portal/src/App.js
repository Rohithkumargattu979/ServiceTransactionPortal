import './App.css';
import React from 'react';
import RegPageseeker from './components/Registrationpageseeker.js'
import RegPagegiver from './components/Registrationpagegiver.js'
import Loginpageopt from './components/Loginoption'
import Error from './components/Error'
import Login from './components/Login.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './components/Home';
import { History } from './components/History';

import { Profile } from './components/Profile';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Search  from './components/Search';
import {About} from './components/About';
import Test from    './components/Test';
import Tab from './components/Tab';

import { NavigationBarprof } from './components/NavigationBarprof';

import  Sidebarprof from './components/Sidebarprof';
import { ProfAbout } from './components/ProfAbout';
import { ProfHome } from './components/ProfHome';
import { ProfHistory} from './components/ProfHistory';
import { ProfProfile } from './components/ProfProfile';



function App() {
  return (
    <div className="App">
      <header className="App-header">              
              {<Switch>
                  <Route exact path='/' component={Loginpageopt} />
                  <Route exact path='/login' component={Login}/>
                  <Route exact path='/regpageseeker' component={RegPageseeker} /> 
                  <Route exact path='/regpagegiver' component={RegPagegiver} /> 

                  <Route
                    exact
                    path='/Home'
                    render={(props) => 
                      <div>
                        <NavigationBar/>
                        <Sidebar/>
                        <Home></Home>
                      </div>
                    }
                  />
                  <Route
                    exact
                    path='/history'
                    render={(props) => 
                      <div>
                        <NavigationBar/>
                        <Sidebar/>
                        <History></History>
                      </div>
                    }
                  />
                  <Route
                    exact
                    path='/profile'
                    render={(props) => 
                      <div>
                        <NavigationBar/>
                        <Sidebar/>
                        <Profile></Profile>
                      </div>
                    }
                  />
                  <Route
                    exact
                    path='/about'
                    render={(props) => 
                      <div>
                        <NavigationBar/>
                        <Sidebar/>
                        <About></About>
                      </div>
                    }
                  />
                  <Route
                    exact
                    path='/search'
                    render={(props) => 
                      <div>
                        <NavigationBar/>
                        <Sidebar/>
                        <Search></Search>
                      </div>
                    }
                  />
                  <Route
                    exact
                    path='/ProfHistory'
                    render={(props) => 
                      <div>
                        <NavigationBarprof/>
                        <Sidebarprof/>
                        <ProfHistory></ProfHistory>
                       
                        
                        
                        
                      </div>
                    }
                  />
                  <Route
                    exact
                    path='/ProfHome'
                    render={(props) => 
                      <div>
                        <NavigationBarprof/>
                        <Sidebarprof/>
                        <ProfHome/>
                        
                        
                      </div>
                    }
                  />
                  <Route
                    exact
                    path='/ProfProfile'
                    render={(props) => 
                      <div>
                        <NavigationBarprof/>
                        <Sidebarprof/>
                        <ProfProfile/>
                        
                       
                      </div>
                    }
                  />
                  <Route
                    exact
                    path='/ProfAbout'
                    render={(props) => 
                      <div>
                        <NavigationBarprof/>
                        <Sidebarprof/>
                        
                        <ProfAbout/>
                      </div>
                    }
                  />

                     
                 
                  
           
            
            
           

            <Route component={Error} />
              </Switch>}            
              
      
      </header>
    </div>
  );
}

export default App;