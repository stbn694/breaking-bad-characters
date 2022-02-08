import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CharacterDetail from './pages/CharacterDetail';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import LanguageSwitcher from './components/LanguageSwitcher';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="character/:id" element={<CharacterDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
