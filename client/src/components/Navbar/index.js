import React from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import adventures from '../../images/adventures.png';
import {Link} from 'react-router-dom';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    const user = null;
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Adventure Book
                <img className={classes.image} src={adventures} alt="adventures" height="40"></img>
            </Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button varient="contained" className={classes.logout} color="secondary">Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant='contained' color='primary' > SingUp</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar