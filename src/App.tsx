import { Box, Typography } from '@mui/material';
import daiMascot from './assets/dai_mascot.png';

const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#FAF7F0',
      }}
    >
      <Typography variant='h3' component='h1' sx={{ fontWeight: 'bold', mb: 3 }}>
        Cool Things Coming Soon!
      </Typography>
      <img src={daiMascot} alt='DAI Mascot' />
    </Box>
  );
};

export default App;
