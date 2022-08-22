import styles from './ErrorBlock.module.scss';

export const ErrorBlock = ({ resopnseCode, syncDate }) => {
  return (
    <div>
      <h1 className={styles.title}>
        Непредвиденный ответ от сервера: {resopnseCode || 'Подробнее в консоли.'}
      </h1>
      <p className={styles.descr}>
        Были загружены данные, полученные во время последней синхронизации. Если проблема
        повторится, пожалуйста, обратитесь к администратору.
        <span className={styles.date}>
          Дата последней синхронизации - {syncDate ? syncDate : 'Неизвестно'}
        </span>
      </p>
    </div>
  );
};
