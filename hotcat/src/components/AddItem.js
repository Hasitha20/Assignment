import React, { useState } from 'react';
import Popup from './Popup';
import TextField from '@material-ui/core/TextField';
import './Css/addbtn.css';
import axios from 'axios';

function AddItem() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const [itemcode, setItemCode] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function sendData(){
    e.preventDefault();

    const newItem = {
      itemcode,
      name,
      price
    }

    axios.post("http://localhost:8070/item/add", newItem).then(()=>{
      alert("Item Added")
      setItemCode("");
      setName("");
      setPrice("");

    }).catch((err)=>{
      alert(err)
    })
     
  }

  // function DeleteItems(itemcode){
        
  //   axios.post("http://localhost:8070/item/delete", {itemcode : itemcode}).then(res => {
  //       console.log(itemcode)
         
  //   }).catch(err => {
  //       console.log(err)
  //   })
// }

  return <div>
      <div className="container">
          <div className="container">                   
                <button type="button" class="btn btn-danger"  style={{ marginTop: 9, marginLeft: 50, width: 100, height: 55}} >Delete</button>
                {/* onClick={() => DeleteItems(props.record.itemcode)} */}
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
        <form onSubmit={sendData}>
            <div class="mb-3">
                <label for="item_code" style={{ color: 'white'}} class="form-label">Item Code</label>
                <input type="number" className="form-control" id="code" 

                onChange={(e) => {
                  setItemCode(e.target.value);

                }}  />
                 
            </div>
            <div class="mb-3">
                <label for="name" style={{ color: 'white'}} class="form-label">Name</label>
                <input type="text" className="form-control" id="Name" 
                
                onChange={(e) => {
                  setName(e.target.value);

                }} />
            </div>
            <label for="name" style={{ color: 'white'}} class="form-label">Type</label>
            <select className="form-select" aria-label="Default select example">
                <option selected>Biscuit</option>
                <option value="1">Fruits</option>
                <option value="2">Vegetables</option>                 
            </select>

            <div class="mb-3">
                <label for="price" style={{ color: 'white'}} class="form-label">price</label>
                <input type="number"   className="form-control" id="price"
                
                onChange={(e) => {
                  setPrice(e.target.value);

                }}/>

            </div>
            
            <button type="submit" class="btn btn-warning" style={{width: 100, marginRight: 50}}>Edit</button>
            <button type="submit" class="btn btn-primary" style={{width: 100, marginLeft: 50}}>Add</button>            
        </form>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}

export default AddItem;