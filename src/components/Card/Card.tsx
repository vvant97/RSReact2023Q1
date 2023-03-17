import { Component } from 'react';
import { MdBookmarkBorder as FavoriteIcon } from 'react-icons/md';
import { Avatar } from '../index';
import { CardType } from '../../data/cardsData';

import './Card.scss';

type CardProps = Omit<CardType, 'id'>;

class Card extends Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    const { title, date, image, content, favorite } = this.props;
    const styles = { backgroundImage: `url("${image}")` };

    return (
      <div className="Card">
        <div className="Card-header">
          <Avatar />
          <div className="Card-info">
            <p className="Card-title">{title}</p>
            <p className="Card-date">{date}</p>
          </div>
          <FavoriteIcon
            className={`FavoriteIcon ${favorite ? 'active' : ''}`}
          />
        </div>

        <div className="Card-photo" style={styles} />
        <p className="Card-description">{content}</p>
      </div>
    );
  }
}

export default Card;
