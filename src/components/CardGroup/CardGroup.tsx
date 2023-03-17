import { Component } from 'react';
import { Card } from '../index';
import { CardType } from '../../data/cardsData';

type CardGroupProps = {
  cards: CardType[];
};

class CardGroup extends Component<CardGroupProps> {
  constructor(props: CardGroupProps) {
    super(props);
  }

  render() {
    const { cards } = this.props;

    return (
      <ul className="CardGroup">
        {cards.map((card) => {
          return <Card {...card} key={card.id} />;
        })}
      </ul>
    );
  }
}

export default CardGroup;
