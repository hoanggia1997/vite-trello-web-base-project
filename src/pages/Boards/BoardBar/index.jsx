import Box from '@mui/material/Box';
// import ModeSelect from '../../components/ModeSelect';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Chip from '@mui/material/Chip';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from '@mui/material/Tooltip';
const MENUS_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white',
  },
  '&:hover': {
    bgcolor: 'primary.50',
  },
};
const BoardBar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        // height: (theme) => theme.trello.appBor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        borderBottom: '1px solid white',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENUS_STYLES}
          icon={<DashboardIcon />}
          label='With Icon'
          Clickable
        />
        <Chip
          sx={MENUS_STYLES}
          icon={<DashboardIcon />}
          label='With Icon'
          Clickable
        />
        <Chip
          sx={MENUS_STYLES}
          icon={<DashboardIcon />}
          label='With Icon'
          Clickable
        />
        <Chip
          sx={MENUS_STYLES}
          icon={<DashboardIcon />}
          label='With Icon'
          Clickable
        />

        <Chip
          sx={MENUS_STYLES}
          icon={<FilterListIcon />}
          label='With Icon'
          Clickable
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AvatarGroup
          max={7}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
            },
          }}
        >
          <Tooltip title='avatar'>
            <Avatar
              alt='Remy Sharp'
              src='https://images.unsplash.com/photo-1706068720402-ce49bf8661be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8'
            />
          </Tooltip>
          <Tooltip title='avatar'>
            <Avatar
              alt='Remy Sharp'
              src='https://images.unsplash.com/photo-1706068720402-ce49bf8661be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8'
            />
          </Tooltip>
          <Tooltip title='avatar'>
            <Avatar
              alt='Remy Sharp'
              src='https://images.unsplash.com/photo-1706068720402-ce49bf8661be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8'
            />
          </Tooltip>
          <Tooltip title='avatar'>
            <Avatar
              alt='Remy Sharp'
              src='https://images.unsplash.com/photo-1706068720402-ce49bf8661be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8'
            />
          </Tooltip>
          <Tooltip title='avatar'>
            <Avatar
              alt='Remy Sharp'
              src='https://images.unsplash.com/photo-1706068720402-ce49bf8661be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8'
            />
          </Tooltip>
          <Tooltip title='avatar'>
            <Avatar
              alt='Remy Sharp'
              src='https://images.unsplash.com/photo-1706068720402-ce49bf8661be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8'
            />
          </Tooltip>
          <Tooltip title='avatar'>
            <Avatar
              alt='Remy Sharp'
              src='https://images.unsplash.com/photo-1706068720402-ce49bf8661be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8'
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default BoardBar;
