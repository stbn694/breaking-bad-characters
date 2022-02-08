import { Quote } from '../types';
import { axios } from './axios';
import { useQuery } from 'react-query';
import { quotesKeys } from './queryKeys';

export const getRandomQuote = (name: string): Promise<Quote> =>
  axios
    .get<any, Quote[]>(`quote/random?author=${name.split(' ').join('+')}`)
    .then((data) => data[0]);

export const useRandomQuote = (name?: string) =>
  useQuery(quotesKeys.random(), () => getRandomQuote(name!), {
    enabled: !!name,
    cacheTime: 0,
  });
