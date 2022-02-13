import React from 'react';
import CharactersList from './components/CharactersList';
import Header from './components/Header';
import { Container } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <Header />
      <Container fixed>
        <CharactersList />
      </Container>
    </>
  );
};

export default Home;
