import React, {useState, useEffect} from 'react';
import { Grow, Grid } from "@mui/material";
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/form';
import Navbar from '../Navbar';


const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <Grow in>
            <div>
                <Navbar />
                <Grid container spacing={12} justify="space-between" alignItems="stretch">
                    <Grid item xs={12} md={8} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
                </div>
        </Grow>
    )
}

export default Home