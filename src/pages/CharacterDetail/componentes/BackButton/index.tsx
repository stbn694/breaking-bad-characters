import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';

type BackButtonProps = {
  to: LinkProps['to'];
};

const BackButton = ({ to }: BackButtonProps) => {
  const { t } = useTranslation();

  return (
    <IconButton
      aria-label={t('back')}
      size="large"
      component={RouterLink}
      to={to}
      sx={{ m: 3, position: 'fixed', top: 0, left: 0 }}
    >
      <KeyboardBackspaceIcon fontSize="inherit" />
    </IconButton>
  );
};

export default BackButton;
