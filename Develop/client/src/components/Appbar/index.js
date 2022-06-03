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
          <h1>
              <span style={{ color: "#e53238" }}>e</span>
              <span style={{ color: "#0064D3" }}>b</span>
              <span style={{ color: "#f5af02" }}>a</span>
              <span style={{ color: "#86B817" }}>y</span>
              <span style={{ color: "#0064D3" }}>Buddy</span>
          </h1>
        </Typography>
        <Button color="inherit">Login | Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;