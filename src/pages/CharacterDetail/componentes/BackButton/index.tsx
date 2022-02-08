import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { IconButton } from '@mui/material';

type BackButtonProps = {
  to: LinkProps['to'];
};

const BackButton = ({ to }: BackButtonProps) => {
  return (
    <IconButton
      aria-label="back"
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
