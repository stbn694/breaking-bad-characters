import { render, screen } from '@testing-library/react';
import CharacterCard from './index';
import { character } from '../../../../utils/testUtils';
import { BrowserRouter } from 'react-router-dom';

test('character card is visible', () => {
  render(<BrowserRouter><CharacterCard character={character} /></BrowserRouter>);
  expect(screen.getByText(character.name)).toBeInTheDocument();
  expect(screen.getByAltText(character.name)).toBeInTheDocument();
});