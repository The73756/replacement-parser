import styles from './ReplFrameBlock.module.scss';

export const ReplFrameBlock = ({ frameItem, isUpdated, title, descr }) => {
  return (
    <div className={`wrapper ${isUpdated ? styles.updated : ''}`}>
      {isUpdated ? <h1 className={styles.title}>Обновлено</h1> : ''}
      <iframe
        className={styles.frame}
        src={`${frameItem}/preview`}
        width='100%' //{link}/preview
        height='100%'
        allow='autoplay'
        title={`${title}, ${descr}`}></iframe>
    </div>
  );
};
