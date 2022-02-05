import React, { Fragment } from 'react';
import { useCharacters } from '../../../../api/getCharacters';
import { Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const CharactersList = () => {
  const { data, fetchNextPage, isFetchingNextPage, isLoading } = useCharacters();

  return (
    <div>
      <h1>Characters list</h1>
      <ul>
        {data?.pages.map((group, i) => (
          <Fragment key={i}>
            {group.map((character) => (
              <li key={character.char_id}>
                <Link component={RouterLink} to={`character/${character.char_id}`}>
                  {character.name}
                </Link>
              </li>
            ))}
          </Fragment>
        ))}
      </ul>
      <Button onClick={() => fetchNextPage()}>Load more</Button>
      {isLoading && <div>Loading</div>}
      {isFetchingNextPage && <div>Fetching next page</div>}
    </div>
  );
};

export default CharactersList;
