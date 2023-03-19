export type CardType = {
  readonly id: number;
  readonly title: string;
  readonly date: string;
  readonly image: string;
  readonly content: string;
  readonly favorite: boolean;
};

export const cardsData: CardType[] = [
  {
    id: 1,
    title: 'Title 1',
    date: 'September 16, 2022',
    image:
      'https://media.istockphoto.com/id/887636042/photo/the-start-of-something-delicious.jpg?s=612x612&w=0&k=20&c=2T_BCJQhhkfohcbcDZ14OV8rPStICJ9Q1_YjGUW2wCo=',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    favorite: true,
  },
  {
    id: 2,
    title: 'Title 2',
    date: 'September 18, 2022',
    image:
      'https://t4.ftcdn.net/jpg/02/54/93/61/360_F_254936166_5MFxlGv7PNPw4VmpuNNQxlU0K2D4f7Ya.jpg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    favorite: false,
  },
  {
    id: 3,
    title: 'Title 3',
    date: 'October 24, 2022',
    image:
      'https://st2.depositphotos.com/1643295/6650/i/600/depositphotos_66507049-stock-photo-cooking-healthy-meal.jpg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    favorite: true,
  },
  {
    id: 4,
    title: 'Title 4',
    date: 'December 19, 2022',
    image:
      'https://thumbs.dreamstime.com/b/fresh-organic-vegetables-spoons-rustic-wooden-background-top-view-border-healthy-food-vegetarian-cooking-concept-63781109.jpg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    favorite: false,
  },
  {
    id: 5,
    title: 'Title 5',
    date: 'December 29, 2022',
    image:
      'https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220__340.jpg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    favorite: false,
  },
];
