import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';

import adventures from "./images/adventures.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/form";
import { useStyles } from "./styles";


const App = () => {
    const[currentId, setCurrentId] =useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Adventure Book
                    <img className={classes.image} src={adventures} alt="adventures" height="40"></img>
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch">
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form  currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </>
    )
}

export default App;