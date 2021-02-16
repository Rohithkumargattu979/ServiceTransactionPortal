import React from 'react'
import { Route} from 'react-router-dom'




const Loginpage = () => {    

    return (
        <div>
            < h1 > Login page</h1 >
            
            
            <Route render={({ history }) => (
                <button onClick={() => { history.push('/regpageseeker') }}>
                    seeker
                </button>
            )} />
            <Route render={({ history }) => (
                <button onClick={() => { history.push('/regpagegiver') }}>
                    giver
                </button>
            )} />
            
        </div>

)

}

export default Loginpage