import styles from './ReplFrameBlock.module.scss';

export const ReplFrameBlock = ({ frameItem, isUpdated, title }) => {
  return (
    <article className={`wrapper ${isUpdated ? styles.updated : ''}`}>
      <div className={styles.top}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <iframe
        className={styles.frame}
        src={`https://drive.google.com/file/d/${frameItem}/preview`}
        width='100%' //drive.google.com/file/d/{uniq.id}/preview
        height='100%'
        allow='autoplay'
        title='Title'></iframe>
    </article>
  );
};
