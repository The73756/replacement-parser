import styles from './Notification.module.scss';

export const UpdatedBlock = () => {
  return (
    <div className={`${styles.wrapper} ${styles.updWrapper}`}>
      <h1 className={styles.title}>Обновлено</h1>
    </div>
  );
};
