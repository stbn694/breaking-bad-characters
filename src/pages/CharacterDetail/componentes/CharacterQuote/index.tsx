import React from 'react';
import { Box, CircularProgress, IconButton, SxProps, Typography } from '@mui/material';
import { useRandomQuote } from '../../../../api/getQuote';
import RefreshIcon from '@mui/icons-material/Refresh';
import ErrorAlert from '../../../../components/ErrorAlert';
import { useTranslation } from 'react-i18next';

const styles: SxProps = {
  borderRadius: 3,
  border: 1,
  borderColor: 'primary.dark',
  p: 2,
  mt: 6,
  display: 'inline-flex',
  alignItems: 'flex-start',
  maxWidth: '400px',
};

type CharacterQuoteProps = {
  name: string;
};

const CharacterQuote = ({ name }: CharacterQuoteProps) => {
  const { t } = useTranslation();
  const { data: quote, refetch, isFetching, isLoading, isError } = useRandomQuote(name);

  if (isError) {
    return (
      <ErrorAlert message={t('characterDetail.quote.error')} action={refetch} sx={{ mt: 6 }} />
    );
  }

  if (isLoading) {
    return <CircularProgress sx={{ mt: 6 }} />;
  }

  if (!quote?.quote) {
    return null;
  }

  return (
    <Box sx={styles}>
      <Typography variant="h5" component="blockquote" sx={{ mr: 'auto', pr: 2 }}>
        "{quote?.quote}"
      </Typography>
      <IconButton
        aria-label={t('characterDetail.quote.refresh')}
        size="small"
        color="secondary"
        onClick={() => refetch()}
        disabled={isFetching}
      >
        {isFetching ? <CircularProgress size={18} /> : <RefreshIcon fontSize="small" />}
      </IconButton>
    </Box>
  );
};

export default CharacterQuote;
