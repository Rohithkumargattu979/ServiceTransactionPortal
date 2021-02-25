import './App.css';

import RegPageseeker from './Registrationpageseeker.js'
import RegPagegiver from './Registrationpagegiver.js'
import Loginpageopt from './Loginoption'
import Error from './Errorpage'
import Login from './Login.js'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
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
