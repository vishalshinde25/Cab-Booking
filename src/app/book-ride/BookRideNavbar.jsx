import { AppBar, Avatar, Box, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import drawerList from './drawerList';

const BookRideNavbar = () => {
  const[sidebarOpen, setSideBarOpen]=useState(false);
  const handleSideBarClose=()=>setSideBarOpen(false);
  const handleSideBarOpen=()=>setSideBarOpen(true);
  return (
   <Box className=''>
    <AppBar sx={{backgroundColor:"#120E43"}} className='' position='static'>
      <Toolbar>
        <IconButton size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{mr:2}}
          onClick={handleSideBarOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow:1}}>
          Cab
        </Typography>
        { true ?(
          <Avatar className='cursor-pointer' 
          
          sx={{bgcolor: deepOrange[500]}}
          >
            A
          </Avatar>
        ):(
          <Button  color="inherit">
            Login
          </Button>
        )}
      </Toolbar>
      </AppBar>
      <Drawer anchor={"left"} open={sidebarOpen} onClose={handleSideBarClose}>
      {drawerList("left")}
      </Drawer>
    
   </Box>
  )
}

export default BookRideNavbar