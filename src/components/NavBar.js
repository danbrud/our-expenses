import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom'
import { Drawer } from '@material-ui/core';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: '#34495e',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}))

export default function NavBar(props) {
  const classes = useStyles()
  const [state, setState] = React.useState({
    left: false
  })

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sumExpenses = () => {
    const sum = props.expenses.reduce((acc, curr) => acc + curr.amount, 0)
    return new Intl.NumberFormat('en-US').format(sum)
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <Typography variant="h6" >
        תפריט
      </Typography>
      <Divider />
      <List>
        {['הוצאות', 'הוסף הוצאה', 'סיכום הוצאות'].map((text, index) => (
          <Link key={text} to={text === 'הוצאות' ? '/' : text === 'הוסף הוצאה' ? '/add-expense' : '/reports'}>
            <ListItem button>
              <ListItemIcon>{index === 0 ? <CreditCardIcon /> : index === 1 ? <AddCircleOutlineIcon /> : <TrendingUpIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="fixed">
        <Drawer
          open={state.left}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {sideList('left')}
        </Drawer>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={toggleDrawer('left', true)} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>

          </Typography>
          {
            window.location.pathname === '/'
              ? <Typography variant="h6">
                {sumExpenses()} :סה"כ הוצאות
                </Typography>
              : null
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}