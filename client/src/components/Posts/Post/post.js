import { Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./styles";
const Post = () => {
    const classes = useStyles();
    return(
        <div>
            <Typography variant="h1">Post</Typography>
        </div>
    )
}

export default Post;