import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './page';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
      '@media (min-width:600px)': {
        fontSize: '4.5rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '3.75rem',
      },
    },
    h3: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;

