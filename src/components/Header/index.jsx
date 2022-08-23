import { Link, useLocation } from 'react-router-dom';

import { ThemeChecker } from '../ThemeChecker';

import styles from './Header.module.scss';

export const Header = () => {
  const location = useLocation().pathname;

  return (
    <header>
      <div className={`container ${styles.header}`}>
        {location !== '/' ? (
          <Link to='/' className={styles.prevBtn}>
            На главную
          </Link>
        ) : (
          <h1>Главная </h1>
        )}
          <ThemeChecker />
      </div>
    </header>
  );
};
