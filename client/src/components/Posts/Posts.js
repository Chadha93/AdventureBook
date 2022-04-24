import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/post";
import { useStyles } from "./style";

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();
    console.log(posts);
    return(
        <div>
            <Typography className={classes.something} variant="h1">POSTS</Typography>
            <Post />
            <Post />
        </div>
    )
}

export default Posts;