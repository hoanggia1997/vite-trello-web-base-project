import { useState } from 'react';
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
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
const AppBar = () => {
  const [SearchValue, setSearchValue] = useState('');
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: (theme) => theme.trello.appBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          paddingX: 4,
          overflowX: 'auto',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AppsIcon sx={{ color: 'primary.main' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <SvgIcon
              component={TrelloIcons}
              inheritViewBox
              fontSize='small'
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
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <Workspaces />
              <Recent />
              <Starred />
              <Templates />
              <Button variant='outlined'> Create</Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField
            required
            id='outlined-search'
            value={SearchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            label='Search'
            type='text'
            size='small'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon sx={{ color: 'white' }} />
                </InputAdornment>
              ),
              endtAdornment: (
                <CloseIcon
                  fontSize='small'
                  sx={{
                    color: SearchValue ? 'white' : 'transparent',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSearchValue('')}
                />
              ),
            }}
            sx={{
              minWidth: '120px',
              maxWidth: '180px',
              '& label': { color: 'white' },
              '& input': { color: 'white' },
              '& label.Mui-focused': { color: 'white' },
              '& label.Mui-focused': { color: 'white' },
              '& .MuiInputBase-root ': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
            }}
          />

          <ModeSelect />
          <Tooltip title='Notifications'>
            <Badge color='warning' variant='dot' sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
            </Badge>
          </Tooltip>
          <Tooltip title='help'>
            <HelpOutlineIcon sx={{ color: 'primary.main' }} />
          </Tooltip>
          <Profiles />
        </Box>
      </Box>
    </>
  );
};

export default AppBar;
