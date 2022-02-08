import React from 'react';
import { useCharacter } from '../../api/getCharacter';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Container, Grid, styled } from '@mui/material';
import CharacterDetailList from './componentes/CharacterDetailList';
import ErrorAlert from '../../components/ErrorAlert';
import BackButton from './componentes/BackButton';
import CharacterHeader from './componentes/CharacterHeader';

const ImageContainer = styled('div')(({ theme }) => ({
  paddingBottom: '140%',
  position: 'relative',
  '& img': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
    borderRadius: theme.shape.borderRadius,
  },
}));

const CharacterDetail = () => {
  const { id } = useParams();
  const { data: character, isLoading, isError, refetch } = useCharacter(+id!);

  return (
    <Box sx={{ py: 15 }}>
      <BackButton to="/" />

      {isLoading ? (
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <CircularProgress size={80} />
        </Box>
      ) : isError ? (
        <Container>
          <ErrorAlert message="There was a problem getting the data" action={refetch} />
        </Container>
      ) : (
        <>
          <CharacterHeader character={character!} />
          <Container fixed>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <ImageContainer>
                  <img src={character?.img} alt={character?.name} />
                </ImageContainer>
              </Grid>
              <Grid item xs={12} md={6}>
                <CharacterDetailList character={character!} />
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </Box>
  );
};

export default CharacterDetail;
