import styles from './NoItems.module.scss';

export const NoItems = ({ isFrame }) => {
  return (
    <div className={styles.emptyContainer}>
      <h1 className={styles.title}>
        {isFrame ? 'Элемент не найден.' : 'Данные, доступные для отображения, отсутствуют'}
      </h1>
      <p className={styles.descr}>
        {isFrame ? 'Вернитесь на главную и попробуйте еще раз' : 'Повторите попытку позже'}
      </p>
    </div>
  );
};
