import React from 'react'
import { Link } from 'react-router-dom'




const Loginpage = () => {    

    return (
        <div>
            < h1 > Login page</h1 >
            
            <button>
                <Link to='/regpageseeker'>regpageseeker</Link> 
                 
            </button>
            <button>
                <Link to='/regpagegiver'>regpagegiver</Link> 
                 
            </button>
            
        </div>

)

}

export default Loginpage