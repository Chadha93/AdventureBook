import { Typography, TextField, Button, Paper } from "@mui/material";
import React, { useState } from "react";
import FileBase from "react-filebase64";
import { useStyles } from "./styles";

const From = () => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '' });
    const classes = useStyles();


    const handleSubmit = () => {

    }

    const Clear = () => {

    }


    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Adenture Book</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <div className={classes.fileInput}>
                    {/* Uploades the file and converts to base64 */}
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" color="primary" fullWidth> Submit </Button>
                <Button variant="contained" size="small" onClick={Clear} color="secondary" fullWidth> Clear </Button>
            </form>
        </Paper>
    )
}

export default From;