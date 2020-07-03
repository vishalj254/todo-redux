import React from 'react';
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {useSelector,useDispatch} from 'react-redux'
import Dialog from '@material-ui/core/Dialog';
// import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'

import TextField from '@material-ui/core/TextField'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper' 
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles(theme => ({
    paper:{padding:'30px',marginTop:'10px',marginBottom:'10px'},
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    root:{
      display:'flex',
      flexWrap:'wrap',
      padding:'10px',
     
      
  
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
      card: {
        maxWidth: 345,
        marginRight:'4%',
        marginTop:'4%'
      },
      media: {
        height:'300px',
    width:'275px'
      },    
  }));
export default function DisplayPost(props) {
  const classes = useStyles();
  const dispatch=useDispatch()
  const [getTitle,setTitle]=React.useState('')
   const [getDescription,setDescription]=React.useState('')
   const [getdate,setdate]=React.useState('')
   const handleSubmit=async()=>{
    let body={
      title:getTitle,
      description:getDescription,
      date:getdate,
      status:'incomplete'
    }
    dispatch({type:'ADD_POST',payload:[body.date,body]})
    setTitle('')
    setDescription('')
    setdate('')
    handleClose()
  }
   

  const data=useSelector(state=>state.post)
  const displaydata=Object.values(data)

  const handleDelete=(date)=>{
    dispatch({type:'DELETE_POST',payload:[date]})
  }

  const [open, setOpen] = React.useState(false);

   const handleClickOpen = (item) => {
       console.log(item)
       setTitle(item.title)
       setDescription(item.description)
       setdate(item.date)
     setOpen(true);
    //  dialogBox(item)
   };
   const handleClose = () => {
     setOpen(false);
   };

   
   
  function dialogBox(){
   
    
   
      return(<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
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
       <Button variant="contained"  onClick={handleSubmit}  color="primary" className={classes.button} fullWidth>
              Submit
            </Button>
       </Grid>    
      </Grid>
      </Paper>
      
      </Container>
            
      </Dialog>
      )
  }

  const handleComplete=(item)=>{
    let body={
      title:item.title,
      description:item.description,
      date:item.date,
      status:'complete'
    }
    dispatch({type:'ADD_POST',payload:[body.date,body]})
    setTitle('')
    setDescription('')
    setdate(new Date())
    handleClose()
  }

  return (<div className={classes.root}>
      {displaydata.map((item,index)=>{return(
          <Card className={classes.card}>
          <CardActionArea>
           
            <CardContent>
              <Typography style={{textDecorationLine:item.status=='complete'?'line-through':null}} gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" style={{textDecorationLine:item.status=='complete'?'line-through':null}} component="p">
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          {item.status=='incomplete'? <Button onClick={()=>handleClickOpen(item)} size="small" color="primary">
              <EditIcon/>
            </Button>:<Button disabled size="small" color="primary">
              <EditIcon/>
            </Button>}
           
            <Button onClick={()=>handleDelete(item.date)} size="small" color="primary">
              <DeleteIcon/>
            </Button>
            {item.status=='incomplete'?<Button onClick={()=>handleComplete(item)} size="small" color="primary">
              <CheckCircleIcon/>
            </Button>:<Button disabled size="small" color="primary">
              <CheckCircleIcon/>
            </Button>}
          </CardActions>
        </Card>
        
      )})}
      {dialogBox()}
    </div>
  );
}
