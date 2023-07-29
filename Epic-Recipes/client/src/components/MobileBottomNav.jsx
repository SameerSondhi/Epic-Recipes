import * as React from 'react';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Grid from '@mui/material/Grid';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function MobileBottomNav() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);

  const emailSubmitHandler = () => {
    if (value) {
      setOpen(true);
    } else {
      setIsEmailEmpty(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setIsEmailEmpty(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Snackbar
        open={open || isEmailEmpty}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} // Set anchorOrigin to display the Snackbar at the bottom center
        sx={{ zIndex: 9999 }} // Set a higher z-index to ensure visibility
      >
        <Alert
          onClose={handleClose}
          severity={isEmailEmpty ? 'error' : 'success'}
          sx={{ width: '100%' }}
          elevation={6}
        >
          {isEmailEmpty ? 'Please enter your email address.' : 'Thank you for subscribing!'}
        </Alert>
      </Snackbar>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: '#FF8000', position:"fixed", bottom:0, top: 'auto' }}>
          <Toolbar>
            <Grid container direction="column" alignItems="center" justifyContent="center">
              <Grid item mt={2}>
                <Typography variant="h6" noWrap component="div" sx={{ color: 'black', fontWeight: 'bold', fontFamily: 'Alkatra', textAlign: 'center' }}>
                  Get our latest recipes and expert tips
                </Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" mt={2} mb={2}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Your Email Address"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    sx={{ input: { fontFamily: 'Alkatra', width: '100%' }, maxWidth: '200px' }}
                  />
                  <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', fontFamily: 'Alkatra' }} onClick={emailSubmitHandler}>
                    Sign Up
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
