export const textToCamelCase = (text: string) =>
  text
    .toLowerCase()
    .split(' ')
    .map((word, idx) => (idx > 0 ? word[0].toUpperCase() + word.slice(1) : word))
    .join('');
