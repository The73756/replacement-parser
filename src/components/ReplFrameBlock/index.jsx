import styles from './ReplFrameBlock.module.scss';

export const ReplFrameBlock = ({ frameItem, isUpdated, title, descr }) => {
  return (
    <div className={`wrapper ${isUpdated ? styles.updated : ''}`}>
      {isUpdated ? <h1 className={styles.title}>Обновлено</h1> : ''}
      <iframe
        className={styles.frame}
        src={`https://drive.google.com/file/d/${frameItem}/preview`}
        width='100%' //drive.google.com/file/d/{uniq.id}/preview
        height='100%'
        allow='autoplay'
        title={`${title}, ${descr}`}></iframe>
    </div>
  );
};
