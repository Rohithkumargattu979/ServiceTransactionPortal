import './App.css';
import RegPageseeker from './Registrationpageseeker.js';
import RegPagegiver from './Registrationpagegiver.js';
import Loginpage from './Login';
import Error from './Errorpage';

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
                  <Route exact path='/' component={Loginpage} />
                  <Route exact path='/regpageseeker' component={RegPageseeker} /> 
                  <Route exact path='/regpagegiver' component={RegPagegiver} />    
                  <Route component={Error} />
              </Switch>}
              
              
      
      </header>
    </div>
  );
}

export default App;
