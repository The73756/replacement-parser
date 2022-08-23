import { Link } from 'react-router-dom';

import styles from './ReplBlock.module.scss';

export const ReplBlock = ({ index, isUpdated, title, indexOf }) => {
  return (
    <Link
      to={`zamena/${indexOf}`}
      key={index}
      className={`${styles.item} ${isUpdated ? styles.changed : ''}`}>
      {title}
    </Link>
  );
};
