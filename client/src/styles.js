import makeStyles from "@mui/styles/makeStyles";
export const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '15px',
    },
    mainContainer: {
        [theme.breakpoints.down('md')]: {
            flexDirection: "column-reverse"
        }
    }

}));