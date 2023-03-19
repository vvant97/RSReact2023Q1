import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it } from 'vitest';

import Search from './Search';

describe('Search', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('renders the component with default search value', () => {
    act(() => {
      render(<Search />);
    });

    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText('Search...');
    expect(inputElement.value).toBe('');
  });

  it('updates search value when input changes', () => {
    act(() => {
      render(<Search />);
    });

    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText('Search...');
    const inputValue = 'test search value';
    fireEvent.change(inputElement, { target: { value: inputValue } });
    expect(inputElement.value).toBe(inputValue);
  });

  it('saves search value to local storage on component unmount', () => {
    act(() => {
      render(<Search />);
    });

    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText('Search...');
    const inputValue = 'test search value';
    fireEvent.change(inputElement, { target: { value: inputValue } });
    localStorage.setItem('search', inputElement.value);

    act(() => {
      render(null!);
    });

    expect(localStorage.getItem('search')).toBe(inputValue);
  });
});
