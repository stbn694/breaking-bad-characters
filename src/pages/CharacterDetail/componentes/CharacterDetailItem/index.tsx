import React, { ReactNode } from 'react';
import { Box, SxProps } from '@mui/material';

const listStyles: SxProps = {
  my: 2,
  '& dt': {
    fontSize: 'body2.fontSize',
    fontWeight: 'bold',
    opacity: 0.5,
  },
  '& dd': {
    fontSize: 'h5.fontSize',
    m: 0,
  },
};

type CharacterDetailItemProps = {
  label: string;
  children: ReactNode;
};

const CharacterDetailItem = ({ label, children }: CharacterDetailItemProps) => {
  return (
    <Box sx={listStyles}>
      <dt>{label}</dt>
      <dd>{children}</dd>
    </Box>
  );
};

export default CharacterDetailItem;
