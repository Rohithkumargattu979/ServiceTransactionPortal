import './App.css';

import RegPageseeker from './components/Registrationpageseeker.js'
import RegPagegiver from './components/Registrationpagegiver.js'
import Loginpageopt from './components/Loginoption'
import Error from './components/Error'
import Login_professional from './components/Login.js'
import Login_customer from './components/Login_customer.js'
import dashboard from './components/dashboard.js'


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
                  <Route exact path='/loginProfessional' component={Login_professional}/>
                  <Route exact path='/loginCustomer' component={Login_customer}/>
                  <Route exact path='/regpageseeker' component={RegPageseeker} /> 
                  <Route exact path='/regpagegiver' component={RegPagegiver} />    
                  <Route exact path= '/dashboard' component = {dashboard} />
                  <Route component={Error} />
              </Switch>}            
              
      
      </header>
    </div>
  );
}

export default App;
