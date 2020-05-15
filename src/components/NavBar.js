import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography, IconButton, List, Divider, ListItem, ListItemIcon, ListItemText, Drawer} from '@material-ui/core'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import SettingsIcon from '@material-ui/icons/Settings'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { CONSTS } from '../utils/consts'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import ExposureIcon from '@material-ui/icons/Exposure'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    height: '50px',
    fontSize: '24px',
    textAlign: 'right',
    marginTop: '12px',
    marginRight: '20px'
  },
  bar: {
    backgroundColor: '#34495e',
  },
  list: {
    width: 250,
    backgroundColor: '#EAF2EF',
    height: '100vh'
  },
  fullList: {
    width: 'auto',
  },
  link: {
    textDecoration: 'none',
    color: '#34495e'
  },
  listItem: {
    margin: '20px 0'
  }
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

  const handleClick = text => {
    if(text === 'יציאה') {
      props.logoutUser()
    }
  }

  const menuIcons = [
    <CreditCardIcon />, <AccountBalanceIcon />, <TrendingUpIcon />,
    <ExposureIcon />, <AddCircleOutlineIcon />, <SettingsIcon />, <ExitToAppIcon />
  ]

  const linkRoutes = [
    '/', '/income', '/reports', '/cashflow', '/add-expense', '/settings', '/signin'
  ]

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <Typography variant="h6" className={classes.title} >
        תפריט
      </Typography>
      <Divider />
      <List>
        {CONSTS.menuItems.map((text, index) => (
          <Link onClick={() => handleClick(text)} className={classes.link} key={text} to={linkRoutes[index]}>
            <ListItem button className={classes.listItem}>
              <ListItemIcon>{menuIcons[index]}</ListItemIcon>
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
        <Toolbar >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={toggleDrawer('left', true)} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>

          </Typography>
          {
            window.location.pathname === '/' || window.location.pathname === '/reports'
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