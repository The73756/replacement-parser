import { Link } from 'react-router-dom';

import styles from './ReplBlock.module.scss';

export const ReplBlock = ({ isUpdated, title, descr, indexOf, isLink = false, link }) => {
  return (
    <article className={`${styles.item} ${isUpdated ? styles.updated : ''}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.descr}>{descr}</p>
      {isLink ? (
        <a
          className={`${styles.link}`}
          href={link}
          aria-label={`Перейти на сайт chtotib.ru/schedule`}
        />
      ) : (
        <Link
          to={`/${indexOf}`}
          className={styles.link}
          aria-label={`Посмотреть ${title} для ${descr}`}
        />
      )}
    </article>
  );
};
