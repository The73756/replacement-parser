import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../../App';

import styles from './ReplacementBlock.module.scss';

export const ReplacementBlock = () => {
  const { items, updItems } = useContext(AppContext);

  const names = [
    'Замена главный корпус',
    'Замена 4 корпус',
    'Расписание 1-2 курс',
    'Расписание 3-4 курс',
    'Рассписание - 4 курс',
  ];

  return items.map((item, index) => {
    return (
      <Link
        to={`zamena/${items.indexOf(item) + 1}`}
        key={index}
        className={`${styles.item} ${index === 4 ? styles.itemBig : ''} ${
          updItems.includes(item) ? styles.changed : ''
        }`}>
        {names[index]}
      </Link>
    );
  });
};
