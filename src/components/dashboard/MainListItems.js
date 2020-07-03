import React from 'react';
import {makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Category from '../Category'


const useStyles = makeStyles(theme => ({
  
  iconColor:{
     color:'rgb(250,250,250)' 
  },
  ListItem:{
     backgroundImage: 'linear-gradient(45deg, #2979ff, transparent)', 
    "&:hover":{
      backgroundImage:'linear-gradient(45deg, blue, transparent)'
    }
   },
}))


export default function MainListItems(props){
  const classes=useStyles();
  
  
  const handleClick=(view)=>{
    props.changeView(view)
  }
const mainListItems = (
  <div>

    <ListItem button onClick={()=>handleClick(<Category/> )} className={classes.ListItem}>
      <ListItemIcon className={classes.iconColor}>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Notes" />
    </ListItem>
  </div>
);


return(<div>
  {mainListItems}
</div>);
}