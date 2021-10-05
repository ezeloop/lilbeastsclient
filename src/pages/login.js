import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {loginAction} from '../redux/actions/login';
import {useDispatch, useSelector} from 'react-redux';
import BasicAlerts from '../components/Alert';
import styled from 'styled-components';

const ContainerAll = styled.div`
  max-width: 500px;
  height: 900px;
  background-color: white;
  
  @media (max-width: 426px) {
  max-height: 500px;
  }
  @media (min-width: 1440px) {
  margin: 0rem;
  padding: 2rem;
  }
`

const theme = createTheme();

export default function SignIn() {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      identifier: '',
      password: ''
    },
    validationSchema: Yup.object({
      identifier: Yup.string().email('Email invalid').required('Email is required'),
      password: Yup.string().required('Password can not be empty')
    }),
    onSubmit: values => {
      dispatch(loginAction(values))
    }
  })

  const error = useSelector((state) => state.auth.error)
  const auth = useSelector((state) => state.auth.autenticated)

  return (
    <ContainerAll>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#334756' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" color="#334756" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="identifier"
              values={formik.values.identifier}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="email"
              autoFocus
            />
           
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              values={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          
            {error ? <BasicAlerts severity={"error"} msg={error} /> : null}
            {auth ? <BasicAlerts severity={"success"} msg={"Login Success"} /> : null}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 , bgColor:"pink"}}
              style={{backgroundColor: '#F0A500'}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </ContainerAll>
  );
}