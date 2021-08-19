// import React from 'react';
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


//         {/* buttons */}

//         {/* <Grid container xs={11}>
//           <Grid item xs={3}>
//             <button type="button" class="btn btn-danger" >Danger</button>
//           </Grid>
//           <Grid  item xs={8}>
//             <TextField id="outlined-basic" label="Search" variant="outlined" style={{ marginTop: 50, marginRight: 800}}/>  
//           </Grid>
//         </Grid> */}
//         {/* <main className={classes.content}>
//             <div class="container" style={{width:1000}} >
//               <button type="button" class="btn btn-danger" style={{ marginTop: 100,  marginRight: 50, marginLeft: 200}}>Danger</button>
                          
//               <button type="button" class="btn btn-primary" style={{ marginTop: 100, marginRight: 100 }}>Primary</button>
//             </div> */}
//         <main className={classes.content}> 
//           <div>
//             <TextField id="outlined-basic" label="Search" variant="outlined" style={{ marginTop: 100, marginRight: 580}}/>
//             <Link to=""><button type="button" class="btn btn-danger" style={{ marginTop: 100,   }}>Danger</button></Link>
            
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
//         </main>

       
                
//     </div>
//   );
// }
