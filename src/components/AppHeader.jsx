import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from "../assets/Logo.webp";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { greenBTN } from '../assets/style';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function AppHeader(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography> */}
      <img src={Logo}/>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <AppBar component="nav" style={{background: "#fff"}} elevation={0}>
          <Toolbar className="flex justify-between" >
            <Box className="flex items-center gap-6">

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
              <img src={Logo}/>
            {/* <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              MUI
            </Typography> */}

              <Autocomplete
              disablePortal
              options={[]}
              sx={{ width: 120 }}
              renderInput={(params) => <TextField {...params} label="" />}
              />
          </Box>
            <Box className sx={{ display: { xs: 'none', sm: 'block' } }}>
              {/* {navItems.map((item) => (
                <Button key={item}>
                  {item}
                </Button>
              ))} */}
              <Button sx={{color: "#000"}}>Shop</Button>
              <Button sx={{color:"#000"}}>Offer</Button>
              <Button sx={{color: "#000"}}>Contact</Button>
              <Button sx={{... greenBTN, marginRight:"20px"}}>Join</Button>
              <Button sx={greenBTN}>Become a Seller</Button>

            </Box>
          </Toolbar>
        </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default AppHeader;
