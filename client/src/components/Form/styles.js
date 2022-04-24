import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: 4
    },
  },
  paper: {
    margin: "2",
  },
    form: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    fileInput: {
      width: '97%',
      margin: '10px 0',
    }
  }));