import React, { Fragment, useRef } from 'react';
import { useCharacters } from '../../../../api/getCharacters';
import { Box, CircularProgress, Grid } from '@mui/material';
import CharacterCard from '../CharacterCard';
import useIntersectionObserver from '../../../../hooks/useIntersectionObserver';
import { motion, Variants } from 'framer-motion';
import ErrorAlert from '../../../../components/ErrorAlert';
import { useTranslation } from 'react-i18next';

const cardAnimation: Variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const CharactersList = () => {
  const { t } = useTranslation();
  const { data, fetchNextPage, hasNextPage, isLoading, isError, isFetching, refetch } =
    useCharacters();

  const loadingIndicatorRef = useRef();

  useIntersectionObserver({
    target: loadingIndicatorRef,
    onIntersect: fetchNextPage,
    enabled: !!hasNextPage && !isFetching,
  });

  return (
    <Box sx={{ pb: 10, textAlign: 'center' }}>
      {isError ? (
        <ErrorAlert message={t('characterList.error')} action={refetch} />
      ) : (
        !isLoading && (
          <Grid
            component={motion.div}
            container
            spacing={4}
            columns={60}
            initial="hidden"
            animate="visible"
          >
            {data?.pages.map((group, i) => (
              <Fragment key={i}>
                {group.map((character) => (
                  <Grid
                    component={motion.div}
                    item
                    key={character.char_id}
                    xs={30}
                    sm={20}
                    md={15}
                    lg={12}
                    variants={cardAnimation}
                  >
                    <CharacterCard character={character} />
                  </Grid>
                ))}
              </Fragment>
            ))}
          </Grid>
        )
      )}

      {(!!hasNextPage || isFetching) && (
        <CircularProgress ref={loadingIndicatorRef} sx={{ my: 5 }} />
      )}
    </Box>
  );
};

export default CharactersList;
