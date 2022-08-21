import { useContext } from 'react';

import { AppContext } from '../../App';
import styles from './RefreshBtn.module.scss';

export const RefreshBtn = () => {
  const { fetchItems } = useContext(AppContext);

  return (
    <button onClick={fetchItems} className={styles.refreshBtn}>
      Обновить
    </button>
  );
};
