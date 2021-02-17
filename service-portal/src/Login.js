import React from 'react'
import { Route} from 'react-router-dom'
import './Login.css';




const Loginpage = () => {    

    return (
        <div>
            < h1 style={{color:'gray'}}> Login page</h1 >
            
            <div className='button'>
                <Route render={({ history }) => (
                    <button className='btn1' onClick={() => { history.push('/regpageseeker') }}>
                        seeker
                    </button>
                )} />
                <Route render={({ history }) => (
                    <button className='btn2' onClick={() => { history.push('/regpagegiver') }}>
                        giver
                    </button>
                )} />
            </div>
            
        </div>

)

}

export default Loginpage