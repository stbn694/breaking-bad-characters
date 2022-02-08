export type Character = {
  char_id: number;
  name: string;
  birthday: string;
  occupation: string[];
  img: string;
  status: string;
  appearance: number[];
  nickname: string;
  portrayed: string;
  category: string;
  better_call_saul_appearance: number[];
};

export type Quote = {
  quote_id: number;
  quote: string;
  author: string;
  series: string;
};
