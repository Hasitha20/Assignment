import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function AddStock(){

    return(
        <div className="container">
            <div className="container">
              
            
            <table class="table table-bordered" style={{align: "center" , marginLeft: 200,  }}style={{ marginTop: 50, width: 1500, height: 700, border: 1  }}>
                <thead>
                    <tr>
                    <th scope="col">Stock id</th>
                    <th scope="col">Code</th>
                    <th scope="col">Date</th>
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