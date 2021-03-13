import './App.css';

import RegPageseeker from './components/Registrationpageseeker.js'
import RegPagegiver from './components/Registrationpagegiver.js'
import Loginpageopt from './components/Loginoption'
import Error from './components/Error'
import Login from './components/Login.js'
import Dashboard from './components/Dashboard.js'
import History from './pages/History.js'
import Home from './pages/Home.js'
import Profile from './pages/Profile.js'


import {
    Switch,
    Route,
    
} from "react-router-dom"

function App() {
  return (
    <div className="App">

      <header >    
                 
              {<Switch>
                  <Route exact path='/' component={Loginpageopt} className="App-header" />
                  <Route exact path='/login' component={Login} className="App-header"/>
                  <Route exact path='/regpageseeker' component={RegPageseeker} className="App-header"/> 
                  <Route exact path='/regpagegiver' component={RegPagegiver} className="App-header"/> 
              </Switch>}            
              
      
      </header>
      <Dashboard/>
      <header>

                  {<Switch>
                  <Route exact path='/home' component={Home} />
                  <Route exact path='/history' component={History}  />
                  <Route exact path='/profile' component={Profile} />  
                  <Route component={Error} className="App-header"/>
                  </Switch>
                    }
      </header>
    </div>
  );
}

export default App;
