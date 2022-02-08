export const characterKeys = {
  all: ['characters'] as const,
  list: () => [...characterKeys.all, 'list'] as const,
  details: () => [...characterKeys.all, 'detail'] as const,
  detail: (id: number) => [...characterKeys.details(), id] as const,
};

export const quotesKeys = {
  all: ['quotes'] as const,
  random: () => [...quotesKeys.all, 'random'] as const,
};
