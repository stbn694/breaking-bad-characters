import React from 'react';
import { useCharacter } from '../../api/getCharacter';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
  const { id } = useParams();
  const { data: character, isLoading } = useCharacter(+id!);

  return (
    <div>
      <h1>Character detail</h1>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <ul>
          <li>{character?.name}</li>
          <li>{character?.nickname}</li>
          <li>{character?.birthday}</li>
          <li>{character?.portrayed}</li>
          <li>
            <img src={character?.img} alt="" />
          </li>
        </ul>
      )}
    </div>
  );
};

export default CharacterDetail;
