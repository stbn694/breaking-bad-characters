import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, styled, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Character } from '../../../../types';

const RootCard = styled(Card)(({ theme }) => ({
  transition: theme.transitions.create('all'),
  textShadow: `0 0 10px ${theme.palette.background.default}`,
  ':hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[20],
    '& .MuiTypography-root': {
      transition: theme.transitions.create('all'),
      transform: 'scale(1.2)',
      backfaceVisibility: 'hidden',
    },
  },
}));

type CharacterCardProps = {
  character: Character;
};

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <RootCard>
      <CardActionArea
        component={RouterLink}
        to={`character/${character.char_id}`}
        sx={{ pb: '140%' }}
      >
        {character.img && (
          <CardMedia
            component="img"
            src={character.img}
            alt=""
            sx={{ position: 'absolute', objectPosition: 'center top', height: '100%' }}
          />
        )}
        <CardContent sx={{ position: 'absolute', bottom: 0, width: '100%', textAlign: 'center' }}>
          <Typography variant="h6" component="div">
            {character.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </RootCard>
  );
};

export default CharacterCard;
