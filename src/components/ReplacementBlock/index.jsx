import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../../App';

export const ReplacementBlock = () => {
  const { items } = useContext(AppContext);

  const names = [
    'Замена главный корпус',
    'Замена 4 корпус',
    'Расписание 1-2 курс',
    'Расписание 3-4 курс',
    'Рассписание - 4 курс',
  ];

  return items.map((item, index) => {
    return (
      <div key={index}>
        <Link to={`zamena/${item}`}>{names[index]}</Link>
      </div>
    );
  });
};