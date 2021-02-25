import React from 'react'
import { Route} from 'react-router-dom'
import './stylesheets/Loginoption.css';




const Loginoption = () => {    

    return (
        <div>
            < h1 style={{color:'gray'}}> Login page</h1 >            
            
            <div className='button'>
                <Route render={({ history }) => (
                    <button className='btn1' onClick={() => { history.push('/login') }}>
                        seeker
                    </button>
                )} />
                <Route render={({ history }) => (
                    <button className='btn2' onClick={() => { history.push('/login') }}>
                        giver
                    </button>
                )} />
            </div>
            
        </div>

)

}

export default Loginoption