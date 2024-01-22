import Box from '@mui/material/Box';
// import ModeSelect from '../../components/ModeSelect';
const BoardBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: (theme) =>
          `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      Board bar
    </Box>
  );
};

export default BoardBar;