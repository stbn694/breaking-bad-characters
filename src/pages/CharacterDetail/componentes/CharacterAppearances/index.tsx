import React from 'react';
import { Box, Chip, SxProps } from '@mui/material';

const containerStyles: SxProps = {
  display: 'flex',
  mt: 0.5,
  alignItems: 'center',
  '& img': {
    width: '50px',
    mr: 2,
  },
};

type CharacterAppearancesProps = {
  total: number;
  appearances: number[];
  img: string;
  title: string;
};

const CharacterAppearances = ({ total, appearances, img, title }: CharacterAppearancesProps) => {
  if (!appearances.length) {
    return null;
  }

  return (
    <Box sx={containerStyles}>
      <img src={img} alt={title} />
      {Array(total)
        .fill(null)
        .map((_, i) => (
          <Chip
            key={i}
            label={i + 1}
            variant={appearances.includes(i + 1) ? 'filled' : 'outlined'}
            sx={{ m: 0.5 }}
          />
        ))}
    </Box>
  );
};

export default CharacterAppearances;
