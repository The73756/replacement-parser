import { Link } from 'react-router-dom';

import styles from './ReplBlock.module.scss';

export const ReplBlock = ({ index, isUpdated, title, descr, indexOf }) => {
  return (
    <article className={`${styles.item} ${isUpdated ? styles.updated : ''}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.descr}>{descr}</p>
      <Link to={`zamena/${indexOf}`} key={index} className={styles.link}></Link>
    </article>
  );
};
