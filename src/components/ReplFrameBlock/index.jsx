import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import { AppContext } from '../../App';

import styles from './ReplFrameBlock.module.scss';

export const ReplFrameBlockmodule = () => {
  const { items, updatedItems, names, fetchItems} = useContext(AppContext);
  const { id } = useParams();
  const item = items[id - 1];
  const isUpdated = updatedItems.includes(item);

  return (
    <article className={`${styles.wrapper} ${isUpdated ? styles.updated : ''}`}>
      <div className={styles.top}>
        <Link to='/' className={styles.fetchButton}>
          На главную
        </Link>
        <h2 className={styles.title}>{names[id - 1]}</h2>
        <button onClick={fetchItems} className={styles.fetchButton}>
          Обновить
        </button>
      </div>
      <iframe
        className={styles.frame}
        src={`https://drive.google.com/file/d/${item}/preview`}
        width='100%' //drive.google.com/file/d/{uniq.id}/preview
        height='100%'
        allow='autoplay'
        title='Title'></iframe>
    </article>
  );
};
