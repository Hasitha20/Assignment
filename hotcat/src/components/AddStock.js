import React, { useState } from 'react';
import Popup from './Popup';
import TextField from '@material-ui/core/TextField';
import './Css/addbtn.css'

function AddStock() {
  const [isOpenStock, setIsOpenStock] = useState(false);

  const togglePopupstock = () => {
    setIsOpenStock(!isOpenStock);
  }

  return <div>
      <div className="container">
          <div className="container">                   
                <button type="button" class="btn btn-danger" style={{ marginTop: 9, marginLeft: 50, width: 100, height: 55}} >Delete</button>
                <TextField id="outlined-basic" label="Search" variant="outlined" style={{ marginTop: 155,  marginLeft: 20, height: 80 }}/>
                <input className="btnadd"
                type="button"                 
                style={{ marginTop: 150,   marginLeft: 500, width: 100, height: 50}}
                value="Add"
                onClick={togglePopupstock}
                />
          </div>
     
    </div> 
    {isOpenStock && <PopupStock content={<>
        <form>
            <div class="mb-3">
                <label for="item_code" class="form-label">Item Code</label>
                <input type="number" class="form-control" id="code"  />
                 
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Name1</label>
                <input type="text" class="form-control" id="Name"/>
            </div>
            <div class="mb-3">
                <label for="Qty" class="form-label">Qty</label>
                <input type="number" class="form-control" id="Qty"/>
            </div>
            
            <button type="submit" class="btn btn-primary" style={{marginRight: 0}}>Edit</button>
            <button type="submit" class="btn btn-primary" style={{marginLeft: 900}}>Add</button>            
        </form>
      </>}
      handleClose={togglePopupstock}
    />}
  </div>
}

export default AddStock;