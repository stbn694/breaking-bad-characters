import React from 'react';
import { Character } from '../../../../types';
import { Box, Chip } from '@mui/material';
import CharacterDetailItem from '../CharacterDetailItem';
import CharacterQuote from '../CharacterQuote';
import CharacterAppearances from '../CharacterAppearances';
import bb_logo from '../../../../assets/images/bb_logo.png';
import bcs_logo from '../../../../assets/images/bcs_logo.png';
import { useTranslation } from 'react-i18next';
import { textToCamelCase } from '../../../../utils/utils';

type CharacterDetailListProps = {
  character: Character;
};

const CharacterDetailList = ({ character }: CharacterDetailListProps) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Chip
        label={t(
          `characterDetail.status.${
            textToCamelCase(character.status) as 'alive' | 'deceased' | 'presumedDead' | 'unknown'
          }`
        )}
      />
      <dl>
        {character.birthday && (
          <CharacterDetailItem label={t('characterDetail.dob')}>
            {character.birthday.toLowerCase() === 'unknown'
              ? t('unknown', { context: 'fem' })
              : character.birthday}
          </CharacterDetailItem>
        )}
        {character.occupation?.length && (
          <CharacterDetailItem label={t('characterDetail.occupation')}>
            {character.occupation[0].toLowerCase() === 'unknown'
              ? t('unknown', { context: 'fem' })
              : character.occupation.map((job, i) => <div key={i}>{job}</div>)}
          </CharacterDetailItem>
        )}
        {character.portrayed && (
          <CharacterDetailItem label={t('characterDetail.portrayed')}>
            {character.portrayed.toLowerCase() === 'unknown' ? t('unknown') : character.portrayed}
          </CharacterDetailItem>
        )}
        {(character.appearance.length || character.better_call_saul_appearance.length) && (
          <CharacterDetailItem label={t('characterDetail.appearances')}>
            <CharacterAppearances
              appearances={character.appearance}
              total={5}
              img={bb_logo}
              title={t('breakingBad')}
            />
            <CharacterAppearances
              appearances={character.better_call_saul_appearance}
              total={5}
              img={bcs_logo}
              title={t('betterCallSaul')}
            />
          </CharacterDetailItem>
        )}
      </dl>
      <CharacterQuote name={character.name} />
    </Box>
  );
};

export default CharacterDetailList;
