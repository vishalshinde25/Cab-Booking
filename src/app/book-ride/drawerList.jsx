import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerList = (anchor) => {
    return (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role='presentation'
        >
            <List>
                {["Book Your Ride", "Rate Card", "Support"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index%2===0 ? <InboxIcon/>: <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                 <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Your Ride"} />
                        </ListItemButton>
                    </ListItem>
            </List>
        </Box>
    )
}

export default drawerList;