import { Link, useLocation } from 'react-router-dom';

import { ThemeChecker } from '../ThemeChecker';
import { ErrorBlock } from '../Notification/ErrorBlock';
import { UpdatedBlock } from '../Notification/UpdatedBlock';

import styles from './Header.module.scss';

export const Header = ({ isError, updatedItems }) => {
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
        {updatedItems.length && isHome ? <UpdatedBlock isHome={isHome} /> : ''}
        <ThemeChecker />
      </div>
      <div className='container'>{isError ? <ErrorBlock isHome={isHome} /> : ''} </div>
    </header>
  );
};
