import React from 'react';
import Box from '@mui/material/Box';
// import ModeSelect from '../../components/ModeSelect';
const BoardContent = () => {
  return (
    <Box
      sx={{
        gcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        width: '100%',
        height: 'calc(100vh - 58px - 88px)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      boader content
    </Box>
  );
};

export default BoardContent;
