import styles from './ErrorBlock.module.scss';

export const ErrorBlock = ({ resopnseCode }) => {
  return (
    <div>
      <h1 className={styles.title}>Произошла ошибка: {resopnseCode}</h1>
      <p className={styles.descr}>
        Были загружены данные, полученные во время последнего запуска приложения.
      </p>
    </div>
  );
};
