import React from 'react';
import CharactersList from './components/CharactersList';
import Header from './components/Header';
import { Container } from '@mui/material';

const Home = () => {
  return (
    <>
      <Header />
      <Container fixed>
        <CharactersList />
      </Container>
    </>
  );
};

export default Home;
