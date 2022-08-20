import { useRef, useState, useCallback } from 'react';

import styles from './ThemeChecker.module.scss';

export const ThemeChecker = () => {
  const [isChecked, setIsChecked] = useState(false);
  const checkbox = useRef(null);

  const handleChangeTheme = useCallback(() => {
    setIsChecked(checkbox.current.checked);
    if (checkbox.current.checked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    console.log('asdasd', checkbox.current.checked);
  }, []);

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
