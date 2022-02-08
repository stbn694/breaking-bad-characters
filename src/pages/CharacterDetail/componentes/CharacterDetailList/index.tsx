import React from 'react';
import { Character } from '../../../../types';
import { Box, Chip } from '@mui/material';
import CharacterDetailItem from '../CharacterDetailItem';
import CharacterQuote from '../CharacterQuote';
import CharacterAppearances from '../CharacterAppearances';
import bb_logo from '../../../../assets/images/bb_logo.png';
import bcs_logo from '../../../../assets/images/bcs_logo.png';

type CharacterDetailListProps = {
  character: Character;
};

const CharacterDetailList = ({ character }: CharacterDetailListProps) => {
  return (
    <Box>
      <Chip label={character.status} />
      <dl>
        {character.birthday && (
          <CharacterDetailItem label="Date of birth">{character.birthday}</CharacterDetailItem>
        )}
        {character.occupation?.length && (
          <CharacterDetailItem label="Occupation">
            {character.occupation.map((job, i) => (
              <div key={i}>{job}</div>
            ))}
          </CharacterDetailItem>
        )}
        {character.portrayed && (
          <CharacterDetailItem label="Portrayed by">{character.portrayed}</CharacterDetailItem>
        )}
        {(character.appearance.length || character.better_call_saul_appearance.length) && (
          <CharacterDetailItem label="Appearances">
            <CharacterAppearances
              appearances={character.appearance}
              total={5}
              img={bb_logo}
              title="Breaking Bad"
            />
            <CharacterAppearances
              appearances={character.better_call_saul_appearance}
              total={5}
              img={bcs_logo}
              title="Better Call Saul"
            />
          </CharacterDetailItem>
        )}
      </dl>
      <CharacterQuote name={character.name} />
    </Box>
  );
};

export default CharacterDetailList;
