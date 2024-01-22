import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ModeSelect from '../../components/ModeSelect';
import AppBar from '../../components/AppBar';
import BoardBar from './BoardBar';
import BoardContent from './BoardContent';
function Board() {
  return (
    <div>
      <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
        <AppBar />
        <BoardBar />

        <BoardContent />
      </Container>
    </div>
  );
}

export default Board;
