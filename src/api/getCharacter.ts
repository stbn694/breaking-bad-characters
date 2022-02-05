import { Character } from '../types';
import { axios } from './axios';
import { useQuery } from 'react-query';
import { characterKeys } from './characterKeys';

export const getCharacter = (id: number): Promise<Character> =>
  axios.get<any, Character[]>(`characters/${id}`).then((data) => data[0]);

export const useCharacter = (id: number) =>
  useQuery(characterKeys.detail(id), () => getCharacter(id));
