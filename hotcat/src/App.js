import logo from './logo.svg';
import './App.css';
import Dashboad from './components/ItemView'


import {BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from './components/NavBar';
import AddTable from './components/ItemTable'
import AddStock from './components/StockTable'
import AddItem from './components/AddItem'

function App() {
  return (
    <Router>
      <div>
       {/* <Dashboad/> */}
       <Navbar/>
        <AddItem/>
       <Route path ="/stock" exact component={AddStock}  />  
       <Route path ="/item" exact component={AddTable}  />  
        

       
      </div>
    </Router>
    
  );
}

export default App;
