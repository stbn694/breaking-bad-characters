import { fireEvent, render, screen } from '@testing-library/react';
import ErrorAlert from './index';

test('shows error alert and action', () => {
  const errorMsg = 'This is an error';
  const callback = jest.fn();
  render(<ErrorAlert message={errorMsg} action={callback} />);
  expect(screen.getByRole('alert')).toHaveTextContent(errorMsg);
  fireEvent.click(screen.getByRole('button'));
  expect(callback).toHaveBeenCalled();
});