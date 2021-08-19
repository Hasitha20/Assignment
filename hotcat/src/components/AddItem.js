import React, { useState } from 'react';
import Popup from './Popup';
import TextField from '@material-ui/core/TextField';
import './Css/addbtn.css'

function AddItem() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
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
                onClick={togglePopup}
                />
          </div>
     
    </div>
     
      
     
     
    {isOpen && <Popup content={<>
        <form>
            <div class="mb-3">
                <label for="item_code" style={{ color: 'white'}} class="form-label">Item Code</label>
                <input type="number" class="form-control" id="code"  />
                 
            </div>
            <div class="mb-3">
                <label for="name" style={{ color: 'white'}} class="form-label">Name</label>
                <input type="text" class="form-control" id="Name"/>
            </div>
            <label for="name" style={{ color: 'white'}} class="form-label">Type</label>
            <select class="form-select" aria-label="Default select example">
                <option selected>Biscuit</option>
                <option value="1">Fruits</option>
                <option value="2">Vegetables</option>                 
            </select>
            <div class="mb-3">
                <label for="price" style={{ color: 'white'}} class="form-label">price</label>
                <input type="number"   class="form-control" id="price"/>
            </div>
            
            <button type="submit" class="btn btn-primary" style={{marginRight: 0}}>Edit</button>
            <button type="submit" class="btn btn-primary" style={{marginLeft: 900}}>Add</button>            
        </form>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}

export default AddItem;