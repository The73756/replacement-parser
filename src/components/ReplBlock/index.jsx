import { Link } from 'react-router-dom';

import styles from './ReplBlock.module.scss';

export const ReplBlock = ({index, isUpdated, name, indexOf }) => {
  return (
    <Link
      to={`zamena/${indexOf}`}
      key={index}
      className={`${styles.item} ${index === 4 ? styles.itemBig : ''} ${ // TODO: переделать стили без вот этого костыля
        isUpdated ? styles.changed : ''
      }`}>
      {name}
    </Link>
  );
};
