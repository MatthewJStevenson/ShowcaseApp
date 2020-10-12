import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
    main: {
        height: "6em",
        flexGrow: "1",
    },
    text: {
        verticalAlign: "center",
    },
    toolbar: {
        width: "100%",
    },
    cart: {
        flexGrow: "1",
    },
    title: {
        flexGrow: "1",
    },
    menuButton: {
        marginRight: "1em",
    },
    cartButton: {
        marginRight: "2em",
    },
    appBar: {
        backgroundColor: "#357a38",
    },
    list: {
        width: "250px",
    }
});

const Nav = props => {
    const classes = useStyles();

    const [drawerStatus, setDrawerStatus] = useState(false);

    const toggleDrawer = (bool) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawerStatus(bool);
    };

    const list = () => (
        <div className={classes.list} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            {["Home", "Store"].map((text, index) => (
              <ListItem button component="a" href={index === 0 ? "/" : "/shoppingcart"} key={text}>
                <ListItemIcon>{index === 0 ? <HomeIcon /> : <ShoppingCartIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );

    return (
        <div className={classes.main}>
             <Grid container>
                <Grid item xs={12}>
                <AppBar className={classes.appBar} position="static">
                    <Toolbar className={classes.toolbar}>
                        <IconButton edge="start" className={classes.menuButton} onClick={toggleDrawer(true)} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="left" open={drawerStatus} onClose={toggleDrawer(false)}>
                         {list()}
                        </Drawer>
                        <Typography variant="h6" className={classes.title}>
                            App
                        </Typography>
                        <IconButton edge="start" className={classes.cartButton} color="inherit" aria-label="menu">
                            <ShoppingCartIcon className={classes.cart}/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                </Grid>
            </Grid>
        </div>
    );
};
export default Nav;