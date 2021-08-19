import React from 'react'
import './Css/nav.css'

function Navbar(){

return(
    <div>
        <div class="sidebar" style={{margin: 0, padding: 0, width: 200, height: '100%', overflow: 'auto', backgroundColor: 'grey', position: 'fixed'}}>
            <a class="active" href="/item">Item Details</a>
            <a href="/stock">Stock Details</a>
             
        </div>
        
        

    </div>
    
)

}

export default Navbar;