import React from 'react';
import Box from '@mui/material/Box';
import ModeSelect from '~/components/ModeSelect';
import AppsIcon from '@mui/icons-material/Apps';
import { ReactComponent as TrelloIcons } from '~/assets/trello.svg';
import SvgIcon from '@mui/material/SvgIcon';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import Workspaces from './Menus/Workspaces';
import Recent from './Menus/Recent';
import Starred from './Menus/Starred';
import Templates from './Menus/Templates';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profiles from './Menus/Profiles';
const AppBar = () => {
  return (
    <>
      <Box
        px={4}
        sx={{
          width: '100%',
          height: (theme) => theme.trello.appBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AppsIcon sx={{ color: 'primary.main' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <SvgIcon
              component={TrelloIcons}
              inheritViewBox
              sx={{ color: 'primary.main' }}
            />
            <Typography
              variant='span'
              sx={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: 'primary.main',
              }}
            >
              Trello
            </Typography>

            <Workspaces />
            <Recent />
            <Starred />
            <Templates />
            <Button variant='outlined'> Create</Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField
            required
            id='outlined-search'
            label='Search...'
            type='search'
            size='small'
          />
          <ModeSelect />
          <Tooltip title='Notifications'>
            <Badge color='secondary' variant='dot' sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon />
            </Badge>
          </Tooltip>
          <Tooltip title='help'>
            <HelpOutlineIcon />
          </Tooltip>
          <Profiles />
        </Box>
      </Box>
    </>
  );
};

export default AppBar;
