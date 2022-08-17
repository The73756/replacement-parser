import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../../App';

import styles from './ReplBlock.module.scss';

export const ReplBlock = () => {
  const { items, updatedItems, names } = useContext(AppContext);

  return items.map((item, index) => {
    return (
      <Link
        to={`zamena/${items.indexOf(item) + 1}`}
        key={index}
        className={`${styles.item} ${index === 4 ? styles.itemBig : ''} ${
          updatedItems.includes(item) ? styles.changed : ''
        }`}>
        {names[index]}
      </Link>
    );
  });
};
