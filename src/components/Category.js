import React from  'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper' 
import Dialog from '@material-ui/core/Dialog';
// import {postDataAndImage} from './FetchServices'
import {useDispatch} from 'react-redux'

import MenuIcon from '@material-ui/icons/Menu';

import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import DisplayPost from './DisplayPost';
 

const drawerWidth = 240;


const useStyles = makeStyles(theme => ({
    paper:{padding:'30px',marginTop:'10px',marginBottom:'10px'},
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
      },
      input: {
        display: 'none',
      },
      rightIcon: {
        marginLeft: theme.spacing(1),
      },
      bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
      },
      root: {
        display: 'flex',
      },
      toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
      },
      toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
          backgroundImage: "linear-gradient(to right, black 10px, #ff5722 800px ,blue)", 
    
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: 36,
      },
      menuButtonHidden: {
        display: 'none',
      },
      title: {
        flexGrow: 1,
      },
      drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      },
      appBarSpacer: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
      paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
      fixedHeight: {
        height: 240,
      },
      list:{
        backgroundColor: 'rgb(23, 31, 41)', 
        },
      
  }));
function  Category(props){
  const dispatch=useDispatch();
    const classes = useStyles();
   const [getTitle,setTitle]=React.useState('')
   const [getDescription,setDescription]=React.useState('')
   
   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
     setOpen(true);
   };
   const handleClose = () => {
     setOpen(false);
   };
const handleSubmit=async()=>{
  let body={
    title:getTitle,
    description:getDescription,
    date:new Date(),
    status:'incomplete'
  }
  dispatch({type:'ADD_POST',payload:[body.date,body]})
  setTitle('')
  setDescription('')
  handleClose()
}
return(
<div>
<AppBar position="static" className={clsx(classes.appBar,)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Todo List
        </Typography>
        
      </Toolbar>
    </AppBar>
  <center>
<Button style={{marginTop:'3%'}} variant='contained' color="primary" onClick={handleClickOpen}>
        Add Notes
    </Button>
    </center>
<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
<Container maxWidth="md">
   <Paper className={classes.paper}>
      <Typography>
      Add Notes
      </Typography>  
<Grid container>
 <Grid item xs={12}>
 <TextField
        id="outlined-dense"
        label="Title"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={getTitle}
        variant="outlined"
        onChange={(event)=>setTitle(event.target.value)}
        fullWidth
      />
 </Grid>   
 <Grid item xs={12}>
 <TextField
        id="outlined-dense"
        label="Description"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={getDescription}
        variant="outlined"
        multiline
        rows={3}
        onChange={(event)=>setDescription(event.target.value)}
        fullWidth
      />
 </Grid>   

 <Grid item xs={12}>
 <Button variant="contained" onClick={handleSubmit}  color="primary" className={classes.button} fullWidth>
        Submit
      </Button>
 </Grid>    
</Grid>
</Paper>

</Container>
      
</Dialog>

      <DisplayPost/>
</div>)
}
export default Category;