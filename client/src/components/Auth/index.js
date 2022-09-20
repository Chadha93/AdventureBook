import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Icon, Box, Container} from '@mui/material';
import CustomInput from '../CustomComoponents/input';
import { signin, signup } from '../../actions/auth';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import background from '../../images/svgviewer-png-output.png';
import { width } from '@mui/material/node_modules/@mui/system';
import {Row, Col} from '../CustomComoponents/Layout';
import styled from "styled-components";
import icon from "../../images/c-icon.svg";

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
  const state = null;

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true);
  const [isNew, setisNew] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }

  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const switchMode = () => {
    setIsSignup((previsSignup) => !previsSignup) // callback function to toggle
    setisNew((previsSignup) => !previsSignup) // callback function to toggle
    setShowPassword(false)
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { result, token } });
      navigate('/');
    } catch (error) {
      console.log(error)
    }
  };
  const googleFaliure = (error) => {
    console.log(error)
    console.log("Google Sign In was unsuccessful. Try Again Later");
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }} >
      <Grid item  sm={8} md={6} >
        <div className={classes.loginWrapper}>
          <Typography className={classes.subHeader}>Adventure Book</Typography>
          <div className={classes.subHeader}>
            <Typography>Supercharge Your Kubernetes Developer Experience!</Typography>
          </div>
            <Row>
              <Col className={classes.features}>
                <h1 className={classes.subHeader}> SMP accounts for details of:</h1>
                <table>
                  <tr>
                    <td className="icon"><img src={icon} alt="icon" /></td>
                    <td className={classes.features}> Environment and infrastructure details </td>
                  </tr>
                  <tr>
                    <td className="icon"><img src={icon} alt="icon" /></td>
                    <td className={classes.features}> Service mesh and its configuration </td>
                  </tr>
                  <tr>
                    <td className="icon"><img src={icon} alt="icon" /></td>
                    <td className={classes.features}> Service (workload) details </td>
                  </tr>
                  <tr>
                    <td className="icon"><img src={icon} alt="icon" /></td>
                    <td className={classes.features}> Statistical analysis of performance results </td>
                  </tr>
                </table>
                <Button primary title="Learn More" url="https://smp-spec.io"></Button>
              </Col>
            </Row>
        </div>
      </Grid>
      <Grid
        container
        xs={12}
        sm={4}
        md={6}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          // backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1366%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient1367)'%3e%3c/rect%3e%3cpath d='M0 0L381.97 0L0 177.26z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M0 177.26L381.97 0L568.02 0L0 283.78z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M0 283.78L568.02 0L763.46 0L0 365.77z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M0 365.77L763.46 0L822.83 0L0 487.36z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M1440 560L919.27 560L1440 415.68z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M1440 415.68L919.27 560L593.06 560L1440 279.11z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M1440 279.11L593.06 560L236.48999999999995 560L1440 162.86z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M1440 162.86L236.49 560L140.06 560L1440 119.60000000000002z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1366'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1367'%3e%3cstop stop-color='rgba(121%2c 92%2c 236%2c 1)' offset='0.5'%3e%3c/stop%3e%3cstop stop-color='rgba(121%2c 92%2c 236%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");`,
          backgroundRepeat: 'no-repeat',
          // backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          flexDirection: 'column',
          backgroundPosition: 'center',
        }}
      >
        <Container className={classes.rightColumn} component="main" maxWidth="xs" elevation={6}>
          <Paper className={classes.paper} elevation={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography style={{ marginBottom: "1rem", fontSize: "1.5rem" }} variant="h6">{isNew ? 'Get started' : 'Welcome'}</Typography>
              {/* GoogleLogin */}
              <Grid style={{ display: 'flex', justifyContent: 'space-evenly' }} item >
                <GoogleLogin
                  clientId='618161435852-ebkuujo3qddg2ohr6vhaommga6f0h4ud.apps.googleusercontent.com'
                  render={(renderProps) => (
                    <Button
                      className={classes.googleButton}
                      color="primary"
                      fullWidth
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      startIcon={<GoogleIcon />}
                      variant="outlined"
                      size='medium'
                    >
                      Google
                    </Button>
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleFaliure}
                  cookiePolicy="single_host_origin"
                />
                <GoogleLogin
                  clientId='618161435852-ebkuujo3qddg2ohr6vhaommga6f0h4ud.apps.googleusercontent.com'
                  render={(renderProps) => (
                    <Button
                      className={classes.googleButton}
                      fullWidth
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      startIcon={<TwitterIcon />}
                      variant="outlined"
                      size='small'
                    >
                      Twitter
                    </Button>
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleFaliure}
                  cookiePolicy="single_host_origin"
                />
              </Grid>
              <form className={classes.form} onSubmit={handleSubmit} >
                <Grid container spacing={2}>
                  {isSignup && (
                    <>
                      <CustomInput name="firstName" label="First Name" autoFocus half handleChange={handleChange} />
                      <CustomInput name="lastName" label="Last Name" half handleChange={handleChange} />
                    </>
                  )}
                  <CustomInput name="email" label="Email Address" handleChange={handleChange} type="email" />
                  <CustomInput name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                  {isSignup && <CustomInput name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                </Grid>
                <Button type="submit" fullWidth variant='filled' color='primary' className={classes.submit}>
                  {isSignup ? 'Sign Up' : 'Sign In'}
                </Button>

                <Grid container justify="flex-end">
                  <Grid item>
                    <Button style={{ textTransform: 'none' }} onClick={switchMode}>
                      {isSignup ? 'Already have an account? LogIn' : "Don't have an account? SignUp"}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Paper>
        </Container>
        {/* <Typography style={{ color: "white", textAlign: "center", padding: "4rem", width: '20rem' }} >by using this site, you agree to our
          Terms of Service and Privacy Policy</Typography> */}
      </Grid>
    </Grid>
  );
}
export default Auth