import React from "react";
import './Css/popup.css'

const PopupStock = props => {
 return (
   <div className="popup-box">
     <div className="box">
       <span className="close-icon" onClick={props.handleClose}>x</span>
       {props.contentstock}
     </div>
   </div>
 );
};

export default PopupStock;