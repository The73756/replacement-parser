import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './ReplFrameBlock.module.scss';

export const FramePreloader = () => {
  return (
    <Skeleton
      height='100%'
      containerClassName={`${styles.frame} ${styles.framePreloader}`}
      lineHeight={2}
    />
  );
};
