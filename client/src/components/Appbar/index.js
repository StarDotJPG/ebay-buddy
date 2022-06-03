import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

function Appbar() {
  return (
    <AppBar position="static" style={{backgroundColor: '#FFFFFF'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ebay BUDDY
        </Typography>
        <Button color="inherit">Login | Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;