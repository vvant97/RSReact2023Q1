import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardGroup from './CardGroup';

describe('CardGroup', () => {
  const cardGroupMock = [
    {
      id: 1,
      title: 'Title 1',
      date: 'September 16, 2022',
      image:
        'https://media.istockphoto.com/id/887636042/photo/the-start-of-something-delicious.jpg?s=612x612&w=0&k=20&c=2T_BCJQhhkfohcbcDZ14OV8rPStICJ9Q1_YjGUW2wCo=',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      favorite: true,
    },
    {
      id: 2,
      title: 'Title 2',
      date: 'September 18, 2022',
      image:
        'https://t4.ftcdn.net/jpg/02/54/93/61/360_F_254936166_5MFxlGv7PNPw4VmpuNNQxlU0K2D4f7Ya.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      favorite: false,
    },
  ];

  it('renders the correct number of cards', () => {
    render(<CardGroup cards={cardGroupMock} />);
    const cardElements = screen.getAllByRole('listitem');
    expect(cardElements).toHaveLength(cardGroupMock.length);
  });

  it('renders the correct title for each card', () => {
    render(<CardGroup cards={cardGroupMock} />);
    cardGroupMock.forEach((card) => {
      const cardTitle = screen.getByText(card.title);
      expect(cardTitle).toBeInTheDocument();
    });
  });

  it('renders the correct content for each card', () => {
    render(<CardGroup cards={cardGroupMock} />);
    cardGroupMock.forEach((card) => {
      const cardContent = screen.getByText(card.content);
      expect(cardContent).toBeInTheDocument();
    });
  });
});
