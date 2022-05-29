import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

export default function MobileDrawer({ openDrawer, handleClose, handleOpen }) {
  const list = () => (
    <Box
      sx={{ width: 250, display: { xs: 'flex', md: 'none' } }}
      role='presentation'
      onClick={handleClose}
      onKeyDown={handleClose}>
      <List>
        {['Staking', 'Farming', 'Launchpads'].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton sx={{ borderRadius: 4 }}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon sx={{ color: 'white' }} /> : <MailIcon sx={{ color: 'white' }} />}
              </ListItemIcon>
              <Typography sx={{ color: 'white' }} fontWeight='bold'>
                {text}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <SwipeableDrawer anchor='left' open={openDrawer} onClose={handleClose} onOpen={handleOpen}>
      {list()}
    </SwipeableDrawer>
  );
}

MobileDrawer.propTypes = {
  openDrawer: PropTypes.bool,
  handleClose: PropTypes.func,
  handleOpen: PropTypes.func,
};
