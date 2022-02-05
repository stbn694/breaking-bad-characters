export const characterKeys = {
  all: ['characters'] as const,
  list: () => [...characterKeys.all, 'list'] as const,
  details: () => [...characterKeys.all, 'detail'] as const,
  detail: (id: number) => [...characterKeys.details(), id] as const,
};