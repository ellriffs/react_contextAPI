import * as React from 'react';
import {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import {ThemeContext} from '../ThemeProvider';
import {userContext} from '../User';

const Header = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const {loggedIn, toggleLogout, toggleLogin} = useContext(userContext);

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar id="app-bar" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            The Counter App
          </Typography>
          <Switch
            onClick={toggleTheme}
            color="default"
            Switch
            to
            {...(theme === 'light' ? 'dark' : 'light')}
            mode
          />
          {loggedIn ? (
            <Button onClick={toggleLogout} color="inherit">
              Logout
            </Button>
          ) : (
            <Button onClick={toggleLogin} color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
