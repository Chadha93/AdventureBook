import makeStyles from "@mui/styles/makeStyles";
import background from '../../images/background.png';

export default makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: theme.spacing(2),
        paddingBottom: 1.5
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundImage: 'linear-gradient(to right, #56CCF2 0%, #2F80ED  51%, #56CCF2  100%)',
        color: 'white',
        transition: '0.5s',
        boxShadow: "0 0 20px #eee",
        "&:hover":
        {
            backgroundPosition: "right center",
            color: "#fff",
            textDecoration: 'none'
        }

    },
    googleButton: {
        width: "auto",
        color: "black"
    },
    loginWrapper: {
        position: 'absolute',
        top: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 40px',
        height: '100%',
        width: '50%',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
           display: "none"
        },
    },
    rightColumn: {
        [theme.breakpoints.down('md')]: {
            float: 'right',
            right: '0',
            top: '0',
            height: '100 %',
            width: '50 %'
        },
    },
    subHeader: {
        fontSize: "30px"
    }
}));