import { Link } from 'react-router-dom';

import styles from './ReplBlock.module.scss';

export const ReplBlock = ({ index, isUpdated, title, descr, indexOf, isLink = false, link }) => {
  return (
    <article className={`${styles.item} ${isUpdated ? styles.updated : ''}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.descr}>{descr}</p>
      {isLink ? (
        <a className={`${styles.link} ${styles.hidden}`} href={link}>
          Перейти на сайт {link}
        </a>
      ) : (
        <Link to={`/${indexOf}`} className={styles.link}></Link>
      )}
    </article>
  );
};
