import './App.css';

import RegPageseeker from './components/Registrationpageseeker.js'
import RegPagegiver from './components/Registrationpagegiver.js'
import Loginpageopt from './components/Loginoption'
import Error from './components/Error'
import Login from './components/Login.js'


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
                  <Route component={Error} />
              </Switch>}            
              
      
      </header>
    </div>
  );
}

export default App;
