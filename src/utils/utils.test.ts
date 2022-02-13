import { textToCamelCase } from './utils';

test('text is camel case', () => {
  const normalText = "Lorem ipsum dolor sit amet";
  const expectedCamelCase = "loremIpsumDolorSitAmet";
  expect(textToCamelCase(normalText)).toBe(expectedCamelCase);
});