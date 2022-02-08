import { Character } from '../types';
import { axios } from './axios';
import { useQuery } from 'react-query';
import { characterKeys } from './queryKeys';

export const getCharacter = (id: number): Promise<Character> =>
  axios.get<any, Character[]>(`characters/${id}`).then((data) => {
    if (data.length) {
      return data[0];
    }
    return Promise.reject();
  });

export const useCharacter = (id: number) =>
  useQuery(characterKeys.detail(id), () => getCharacter(id));
