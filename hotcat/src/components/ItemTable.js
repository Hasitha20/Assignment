import React from 'react'
import TextField from '@material-ui/core/TextField';
import Popup from './Popup'
import AddItem from './AddItem'

export default function AddTable(){
     
     
    

    return(
        <div className="container">
            <div className="container">
             

            <table class="table table-bordered" style={{align: "center" , marginLeft: 200,  }}style={{ marginTop: 50, width: 1500, height: 700, border: 1  }}>
                <thead>
                    <tr>
                    <th scope="col">Item Code</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Qty</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td> </td>
                    <td> </td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td> </td>
                    <td> </td>
                    <td></td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td> </td>
                    <td> </td>
                    <td></td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td> </td>
                    <td> </td>
                    <td></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

 