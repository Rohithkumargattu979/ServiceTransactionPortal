import './App.css';
import RegPage from './Registrationpage'
import Loginpage from './Login'
import Error from './Errorpage'

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
                  <Route exact path='/regpage' component={RegPage} />                  
                  <Route component={Error} />
              </Switch>}
              
      
      </header>
    </div>
  );
}

export default App;
