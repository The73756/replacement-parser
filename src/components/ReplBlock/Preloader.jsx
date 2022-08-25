import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './ReplBlock.module.scss';

export const Preloader = () => {
  return (
    <Skeleton

      height='100%'
      width='100%'
      circle={true}
      containerClassName={`${styles.item} ${styles.itemPreloader}`}
      lineHeight={2}
    />
  );
};
