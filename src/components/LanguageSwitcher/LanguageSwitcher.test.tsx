import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSwitcher from './index';
import i18n from '../../i18n';

test('language is changed', () => {
  render(<LanguageSwitcher/>);
  fireEvent.click(screen.getByRole('button'));
  fireEvent.click(screen.getByText('English'));
  expect(i18n.language).toBe('en');
});