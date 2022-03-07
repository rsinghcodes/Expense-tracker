import { CssBaseline, Grid } from '@mui/material';
import { ThemeProvider, createTheme, alpha } from '@mui/material/styles';

import './App.css';
import {
  Header,
  AddTransaction,
  Balance,
  IncomeExpenses,
  TransactionList,
} from './components';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Public Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
      ].join(','),
    },
    palette: { primary: { main: '#0070F3' } },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        gap={3}
        minHeight="90vh"
      >
        <Grid
          item
          display="flex"
          flexDirection="column"
          p={3}
          borderRadius="5px"
          borderColor={(theme) => alpha(theme.palette.grey[500], 0.72)}
          sx={{
            borderWidth: '1px',
            borderStyle: 'solid',
            width: { xs: '95%', sm: '50%', md: '35%' },
          }}
        >
          <Balance />
          <IncomeExpenses />
          <AddTransaction />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          p={3}
          borderRadius="5px"
          borderColor={(theme) => alpha(theme.palette.grey[500], 0.72)}
          sx={{
            borderWidth: '1px',
            borderStyle: 'solid',
            width: { xs: '95%', sm: '50%', md: '35%' },
          }}
        >
          <TransactionList />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
