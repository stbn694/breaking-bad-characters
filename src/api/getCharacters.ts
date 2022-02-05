import { Character } from '../types';
import { axios } from './axios';
import { useInfiniteQuery } from 'react-query';
import { characterKeys } from './characterKeys';

const PAGE_SIZE = 20;

export const getCharacters = (page: number): Promise<Character[]> =>
  axios.get(`characters?limit=${PAGE_SIZE}&offset=${PAGE_SIZE * page}`);

export const useCharacters = () =>
  useInfiniteQuery(characterKeys.list(), ({ pageParam = 0 }) => getCharacters(pageParam), {
    getNextPageParam: (lastPage, pages) => (lastPage.length < PAGE_SIZE ? undefined : pages.length),
  });
