import { render } from '@testing-library/react';
import CharacterAppearances from './index';

test('season appearances are shown', () => {
  const { container } = render(<CharacterAppearances total={3} appearances={[2, 3]} img={''} title={''} />);
  expect(container.getElementsByClassName('MuiChip-filled').length).toBe(2);
  expect(container.getElementsByClassName('MuiChip-outlined')[0]).toHaveTextContent('1');
});