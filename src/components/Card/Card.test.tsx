import { describe, test } from 'vitest';
import { screen, render } from '@testing-library/react';

import Card from './Card';

describe('Card component', () => {
  const cardDataMock = {
    title: 'Title 1',
    date: 'September 16, 2022',
    image:
      'https://media.istockphoto.com/id/887636042/photo/the-start-of-something-delicious.jpg?s=612x612&w=0&k=20&c=2T_BCJQhhkfohcbcDZ14OV8rPStICJ9Q1_YjGUW2wCo=',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    favorite: true,
  };

  test('renders card title', () => {
    render(<Card {...cardDataMock} />);
    const cardTitle = screen.getByText(cardDataMock.title);
    expect(cardTitle).toBeInTheDocument();
  });

  test('renders card date', () => {
    render(<Card {...cardDataMock} />);
    const cardDate = screen.getByText(/September/i);
    expect(cardDate).toBeInTheDocument();
  });

  test('renders card description', () => {
    render(<Card {...cardDataMock} />);
    const cardDescription = screen.getByText(cardDataMock.content);
    expect(cardDescription).toBeInTheDocument();
  });

  test('renders favorite icon with active class', () => {
    render(<Card {...cardDataMock} />);
    const favoriteIcon = screen.getByTestId('favorite-icon');
    expect(favoriteIcon).toBeInTheDocument();
    expect(favoriteIcon).toHaveClass('active');
  });

  test('renders favorite icon without active class', () => {
    const inactiveIconMock = {
      ...cardDataMock,
      favorite: false,
    };

    render(<Card {...inactiveIconMock} />);
    const favoriteIcon = screen.queryByTestId('favorite-icon');
    expect(favoriteIcon).not.toHaveClass('active');
  });
});
