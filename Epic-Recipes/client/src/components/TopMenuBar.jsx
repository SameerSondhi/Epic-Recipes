import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SocialMediaIcons from './SocialMediaIcons';
import DrawerComponent from './HomeButton';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';

export default function TopMenuBar() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#FF8000" }}>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={3} md={1}>
              <DrawerComponent >
                <MenuIcon />
              </DrawerComponent>
            </Grid>
            <Grid item xs={6} md={10}>
              <Typography variant={isMobile ? "h5" : 'h4'} component={Link} to="/" sx={{ color: "black", fontWeight: "bold", fontFamily: 'Alkatra', textDecoration: 'none' }} >
                Epic Recipes
              </Typography>
            </Grid>
            <Grid item xs={3} md={1}>
              <SocialMediaIcons color="black" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}