import { useContext } from 'react';

import { AppContext } from '../../App';
import styles from './Notification.module.scss';

export const ErrorBlock = ({ isHome }) => {
  const { errorMesageText, syncDateText } = useContext(AppContext);

  return (
    <div className={`${styles.wrapper} ${!isHome ? styles.wrapperBottom : ''}`}>
      <h2 className={styles.title}>Response: {errorMesageText || 'See console'}</h2>
      <p className={styles.descr}>
        Были загружены данные, полученные во время последней синхронизации.
      </p>
      <p className={styles.descr}>
        Дата последней синхронизации: {syncDateText ? syncDateText : 'Неизвестно'}
      </p>
    </div>
  );
};
