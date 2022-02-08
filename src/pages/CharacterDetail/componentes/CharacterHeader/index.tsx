import React from 'react';
import { Box, Typography } from '@mui/material';
import { Character } from '../../../../types';

type CharacterHeaderProps = {
  character: Character;
};

const CharacterHeader = ({ character }: CharacterHeaderProps) => {
  return (
    <Box sx={{ px: 5, mb: 10, textAlign: 'center' }}>
      <Typography variant="h1">{character?.name}</Typography>
      {character?.nickname && (
        <Typography variant="h4" component="div" sx={{ opacity: 0.4, fontWeight: 'bold' }}>
          "{character.nickname}"
        </Typography>
      )}
    </Box>
  );
};

export default CharacterHeader;
