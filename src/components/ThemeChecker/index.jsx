import { useRef, useState, useCallback, useEffect } from 'react';

import styles from './ThemeChecker.module.scss';

export const ThemeChecker = () => {
  const currentTheme = localStorage.getItem('rp-theme');
  const [theme, setTheme] = useState(currentTheme);
  const checkbox = useRef(null);
  const isMount = useRef(false);
  const isChecked = theme === 'dark' ? true : false;

  useEffect(() => {
    if (currentTheme) {
      setTheme(currentTheme);
    }

    if (currentTheme === 'dark') {
      document.body.classList.add('dark');
    }

    if (!currentTheme && isMount.current) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches && isMount.current) {
        localStorage.setItem('rp-theme', 'dark');
      } else {
        localStorage.setItem('rp-theme', 'light');
      }
    }

    isMount.current = true;
  }, [currentTheme]);

  const handleChangeTheme = useCallback(() => {
    if (theme === 'light') {
      document.body.classList.add('dark');
      localStorage.setItem('rp-theme', 'dark');
      setTheme('dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('rp-theme', 'light');
      setTheme('light');
    }
  }, [theme]);

  return (
    <label htmlFor='theme' className={styles.theme}>
      <span className={styles.theme__toggleWrap}>
        <input
          type='checkbox'
          ref={checkbox}
          checked={isChecked}
          onChange={handleChangeTheme}
          id='theme'
          className={styles.theme__toggle}
          role='switch'
          name='theme'
          value='dark'
        />
        <div className={styles.theme__fill}></div>
        <span className={styles.theme__icon}>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
        </span>
      </span>
    </label>
  );
};
