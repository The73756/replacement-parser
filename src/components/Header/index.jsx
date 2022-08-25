import { Link, useLocation } from 'react-router-dom';

import { ThemeChecker } from '../ThemeChecker';
import { ErrorBlock } from '../ErrorBlock';

import styles from './Header.module.scss';

export const Header = ({ isError }) => {
  const location = useLocation().pathname;

  const isHome = location === '/';

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        {!isHome ? (
          <Link to='/' className={styles.prevBtn}>
            Назад
          </Link>
        ) : (
          ''
        )}
        <ThemeChecker />
      </div>
      <div className='container'>{isError ? <ErrorBlock isHome={isHome} /> : ''}</div>
    </header>
  );
};
