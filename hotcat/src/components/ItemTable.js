import React from 'react'
import TextField from '@material-ui/core/TextField';
import Popup from './Popup'
import AddItem from './AddItem'

export default function AddTable(){

    

    return(
        <div className="container">
            <div className="container">
            {/* <button type="button" class="btn btn-danger" style={{ marginTop: 100, marginLeft: 100, width: 100, height: 50}} >Delete</button>
            <TextField id="outlined-basic" label="Search" variant="outlined" style={{ marginTop: 100,  marginLeft: 20, height: 80 }}/> */}
            {/* <button type="button" class="btn btn-primary"   style={{ marginTop: 100,    marginLeft: 500, width: 100, height: 50}}>Add</button>  */}
            {/* <input type="button" value="Add" class="btn btn-primary" style={{ marginTop: 100,    marginLeft: 500, width: 100, height: 50}}   /> */}
 

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

 