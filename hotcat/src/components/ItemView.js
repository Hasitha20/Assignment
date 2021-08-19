// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItem from '@material-ui/core/ListItem';
// import { Grid } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import { Link  } from 'react-router-dom';
// import popup from './popup';


// const drawerWidth = 440;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     backgroundColor: "grey",
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
    
//   },
//   drawerPaper: {
//     width: drawerWidth,
//     backgroundColor: "grey",
//   },
//   drawerContainer1: {
//     overflow: 'auto',
//     padding: "10px",
//   },
   
//   testStyyle: {
//     color: "black",    
//     padding: "10px",
    
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(1),
//     marginLeft: theme.spacing(0),
//     // marginBlockEnd: theme.spacing(1)
     
     
//   },
  
// }));

// export default function Dashboard() {
//   const classes = useStyles();

//   function AddItem() {
//     const [isOpen, setIsOpen] = useState(false);
  
//     const togglePopup = () => {
//       setIsOpen(!isOpen);
//     }

//     return <div>
//     <input
//       type="button"
//       style={{marginRight: 100}}
//       value="Click to Open Popup"
//       onClick={togglePopup}
//     />
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//     {isOpen && <Popup
//       content={<>
//         <b>Design your Popup</b>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//         <button>Test button</button>
//       </>}
//       handleClose={togglePopup}
//     />}
//   </div>
//   }



//   return (
//     <div className={classes.root}>     
//       <AppBar position="fixed" className={classes.appBar}>
//         <Toolbar>
//           <Typography variant="h4" noWrap>
//             Item View
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         className={classes.drawer}
//         variant="permanent"
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//         <Toolbar />
//         <div className={classes.drawerContainer1}>
//           <List>
//             {['Inbox'].map((text, index) => (
//               <ListItem button key={text}>                
//                <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>         
           
//         </div>
//         <div className={classes.testStyyle}>
//         <List>
//             {['Starred'].map((text, index) => (
//               <ListItem button key={text}>                
//                 <ListItemText primary={text} />
//                </ListItem>
//             ))}
//           </List> 
//         </div>
//       </Drawer>
 
//         {/* <main className={classes.content}>  */}
        
//           <div>
//             <TextField id="outlined-basic" label="Search" variant="outlined" style={{ marginTop: 100, marginRight: 580}}/>
//              {/* <button type="button" class="btn btn-danger" onClick ={togglePopup} style={{ marginTop: 100,   }}>Danger</button>  */}
            
//           </div> 
//           <div >
//             <button type="button" class="btn btn-primary" style={{ marginTop: 100, marginRight: 100 }}>Primary</button>
//           </div>
//         {/* Table */}
//           <div class="container">
//             <table class="table table-bordered" style={{ marginTop: 100, width: 1500, height: 700, border: 1  }}>
//                 <thead>
//                     <tr>
//                     <th scope="col">Item Code</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Type</th>
//                     <th scope="col">Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                     <th scope="row"></th>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     </tr>
//                     <tr>
//                     <th scope="row"></th>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     </tr>
//                     <tr>
//                     <th scope="row"></th>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     </tr>
//                     <tr>
//                     <th scope="row"></th>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     </tr>
//                 </tbody>
//             </table>
//           </div>
//         {/* </main> */}

       
                
//     </div>
//   );
// }
