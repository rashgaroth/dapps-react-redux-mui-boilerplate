import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Paper } from '@mui/material';
import { Home, Person } from '@mui/icons-material';

export default function BottomNavbar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction
            label='Home'
            sx={{
              color: 'white',
            }}
            icon={<Home sx={value !== 0 ? { color: 'white' } : undefined} />}
            showLabel={false}
          />
          <BottomNavigationAction
            label='Favorites'
            icon={<FavoriteIcon sx={value !== 1 ? { color: 'white' } : undefined} />}
            showLabel={false}
          />
          <BottomNavigationAction
            label='Profile'
            icon={<Person sx={value !== 2 ? { color: 'white' } : undefined} />}
            showLabel={false}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
