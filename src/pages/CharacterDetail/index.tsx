import React from 'react';
import { useCharacter } from '../../api/getCharacter';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Container, Grid, styled } from '@mui/material';
import CharacterDetailList from './componentes/CharacterDetailList';
import ErrorAlert from '../../components/ErrorAlert';
import BackButton from './componentes/BackButton';
import CharacterHeader from './componentes/CharacterHeader';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { motion, Variants } from 'framer-motion';

const ImageContainer = styled(motion.div)(({ theme }) => ({
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

const headerAnimation: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imgAnimation: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } },
};

const detailsAnimation: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } },
};

const CharacterDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { data: character, isLoading, isError, refetch } = useCharacter(+id!);

  return (
    <Box sx={{ py: 15 }}>
      <BackButton to='/' />

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
          <ErrorAlert message={t('characterDetail.error')} action={refetch} />
        </Container>
      ) : (
        <motion.div initial='hidden' animate='visible'>
          <Helmet>
            <title>{character?.name} - {t('title')}</title>
          </Helmet>
          <motion.div variants={headerAnimation}>
            <CharacterHeader character={character!} />
          </motion.div>
          <Container fixed>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <ImageContainer variants={imgAnimation}>
                  <img src={character?.img} alt={character?.name} />
                </ImageContainer>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div variants={detailsAnimation}>
                  <CharacterDetailList character={character!} />
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </motion.div>
      )}
    </Box>
  );
};

export default CharacterDetail;
